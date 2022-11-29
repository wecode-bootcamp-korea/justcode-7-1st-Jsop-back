const database = require('./database');

async function createProduct(product) {
  let { title, img_url, description, category_2 } = product;
  img_url = process.env.ORIGIN_URL + img_url;
  return await database.query(
    `
        INSERT INTO
          item(title, img_url, description, 2_level_category_id)
        VALUES
          (?, ?, ?, ?)
    `,
    [title, img_url, description, category_2.id]
  );
}

// 카테고리가 존재하는 지 확인
async function findCategory(level, cateName) {
  if (!(level == 1 || level == 2)) {
    return undefined;
  }
  const levelText = level == 1 ? `1_level_category` : `2_level_category`;
  const [result] = await database
    .query(`SELECT * FROM ${levelText} WHERE content=?`, [cateName])
    .catch(e => {
      console.log('e: ', e);
      throw { ...e, code: 500 };
    });
  return result;
}

// 사이즈 확인
async function findSize(size) {
  const rtn = await database.query(
    `
      SELECT
        id
      FROM
        size
      WHERE size = '${size}'
  `
  );
  return rtn;
}

// 사이즈 생성
async function createSize(size) {
  const rtn = await database.query(
    `
      INSERT INTO
        size(size)
      VALUES
        ('${size}')
      ON DUPLICATE KEY
        UPDATE id = id
  `
  );
  return rtn;
}

// 사이즈_가격 entity 생성
async function createSizePrice(itemId, sizeId, price) {
  const rtn = await database.query(
    `
      INSERT INTO
        item_size_price(item_id, size_id, price)
      VALUES
        (?, ?, ?)
  `,
    [itemId, sizeId, price]
  );
  return rtn;
}

async function findPropertyType(propertyType) {
  const [rtn] = await database.query(
    `
      SELECT
        id
      FROM
        property_type_contents
      WHERE content = '${propertyType}'
  `
  );
  return rtn;
}

async function createProperty(propertyTypeContentId, property) {
  const rtn = await database.query(
    `
      INSERT INTO
        properties(property_type_contents_id, content)
      VALUES
        (?, ?)
      ON DUPLICATE KEY
        UPDATE id = id
  `,
    [propertyTypeContentId, property]
  );
  return rtn;
}

async function findPropety(property) {
  const [rtn] = await database.query(
    `
      SELECT
        id
      FROM
        properties
      WHERE content = '${property}'
  `
  );
  return rtn;
}

// TODO 3 - SQL inject 방어 방법으로 변경
async function createItemProperty(itemId, propertyId) {
  const rtn = await database.query(
    `
      INSERT INTO
        item_properties(item_id, properties_id)
      VALUES
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `,
    [itemId, propertyId]
  );

  return rtn;
}

async function getProducts(option={}) {
  const {productId, level_1_category, level_2_category} = option;
  const rtn = await database.query(`
  SELECT
    item.id,
    item.title,
    item.img_url,
    item.description,
    CONCAT('[',price,']') as price,
    JSON_OBJECT(
      'level_1_category',
      1_level_category.content,
      'level_2_category',
      2_level_category.content
    ) AS category,
    GROUP_CONCAT(JSON_OBJECT('types', property_type_contents.content, 'values', property) ORDER BY property_types.id) AS properties
  FROM
    item
    JOIN(
      SELECT
        item_id,
        GROUP_CONCAT(JSON_ARRAY(size, price, item_size_price.id) order by item_size_price.id) AS price
      FROM
        item_size_price
        LEFT JOIN size ON size.id = item_size_price.size_id
      GROUP BY
        item_id
    ) price ON price.item_id = item.id
    JOIN 2_level_category ON 2_level_category.id = item.2_level_category_id
    JOIN 1_level_category ON 1_level_category.id = 2_level_category.1_level_category_id
    JOIN property_types ON property_types.2_level_id = item.2_level_category_id
    JOIN property_type_contents ON property_type_contents.id = property_types.property_type_contents_id
    JOIN (
      SELECT
        item.id AS item_id,
        property_type_contents.content AS type_content,
        JSON_ARRAYAGG(properties.content) AS property
      FROM
        item
        JOIN item_properties ON item_id = item.id
        JOIN properties ON properties.id = item_properties.properties_id
        JOIN property_type_contents ON property_type_contents.id = properties.property_type_contents_id
      GROUP BY
        item.id,
        property_type_contents.content
    ) item_type_property ON item_type_property.item_id = item.id
  WHERE
      type_content = property_type_contents.content
  ${ productIdBuilder(productId) }
  ${ categoryBuilder('1_level_category', level_1_category)}
  ${ categoryBuilder('2_level_category', level_2_category)}
  GROUP BY
    item.id,
    title,
    img_url,
    price,
    item.description,
    category
  `)
  .then((answer) => {
    return [...answer].map((item)=> {
      return {...item, price: JSON.parse(item.price), category: JSON.parse(item.category), properties: JSON.parse('['+item.properties+']')}
    })
  });
  return rtn;
}

module.exports = {
  createProduct,
  findCategory,
  findSize,
  createSize,
  createSizePrice,
  findPropertyType,
  createProperty,
  findPropety,
  createItemProperty,
  // TODO2 - findProducts
  getProducts,
};
