const database = require('./database');

async function createProduct(product) {
  const { title, img_url, description, category_2 } = product;
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

async function test() {
  const result = await findCategory(1, '스킨 케어');
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

async function createItemProperty(itemId, propertyId) {
  const rtn = await database.query(
    `
      INSERT INTO
        item_properties(item_id, properties_id)
      VALUES
        (?, ?)
  `,
    [itemId, propertyId]
  );
  return rtn;
}

module.exports = {
  createProduct,
  test,
  findCategory,
  findSize,
  createSize,
  createSizePrice,
  findPropertyType,
  createProperty,
  findPropety,
  createItemProperty
};
