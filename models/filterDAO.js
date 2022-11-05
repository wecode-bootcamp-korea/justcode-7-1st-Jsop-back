const dataSource = require('./database');

async function filter(category) {
    const result = await dataSource.query(`
    SELECT item.id,
           item.title,
           item.img_url,
           item.description,
           CONCAT('[',price,']') as price,
           JSON_OBJECT(
              '1_level_category',
               1_level_category.content,
              '2_level_category',
               2_level_category.content
              ) AS category,
           GROUP_CONCAT(JSON_OBJECT('types', property_type_contents.content, 'values', property) ORDER BY property_types.id) AS properties
    FROM item
    JOIN(
        SELECT
          item_id,
          GROUP_CONCAT(JSON_ARRAY(size, price) order by item_size_price.id) AS price
        FROM item_size_price
        LEFT JOIN size ON size.id = item_size_price.size_id
        GROUP BY item_id
        ) price ON price.item_id = item.id
    JOIN 2_level_category ON 2_level_category.id = item.2_level_category_id
    JOIN 1_level_category ON 1_level_category.id = 2_level_category.1_level_category_id
    JOIN property_types ON property_types.2_level_id = item.2_level_category_id
    JOIN property_type_contents ON property_type_contents.id = property_types.property_type_contents_id
    JOIN(
        SELECT
          item.id AS item_id,
          property_type_contents.content AS type_content,
          JSON_ARRAYAGG(properties.content) AS property
        FROM item
        JOIN item_properties ON item_id = item.id
        JOIN properties ON properties.id = item_properties.properties_id
        JOIN property_type_contents ON property_type_contents.id = properties.property_type_contents_id
        GROUP BY item.id, property_type_contents.content
        ) item_type_property ON item_type_property.item_id = item.id
    WHERE type_content = property_type_contents.content and 1_level_category.content = '${category}'
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
      return result;
}

async function filter2(category) {
    const result = await dataSource.query(`
    SELECT item.id,
           item.title,
           item.img_url,
           item.description,
           CONCAT('[',price,']') as price,
           JSON_OBJECT(
              '1_level_category',
               1_level_category.content,
              '2_level_category',
               2_level_category.content
              ) AS category,
           GROUP_CONCAT(JSON_OBJECT('types', property_type_contents.content, 'values', property) ORDER BY property_types.id) AS properties
    FROM item
    JOIN(
        SELECT
          item_id,
          GROUP_CONCAT(JSON_ARRAY(size, price) order by item_size_price.id) AS price
        FROM item_size_price
        LEFT JOIN size ON size.id = item_size_price.size_id
        GROUP BY item_id
        ) price ON price.item_id = item.id
    JOIN 2_level_category ON 2_level_category.id = item.2_level_category_id
    JOIN 1_level_category ON 1_level_category.id = 2_level_category.1_level_category_id
    JOIN property_types ON property_types.2_level_id = item.2_level_category_id
    JOIN property_type_contents ON property_type_contents.id = property_types.property_type_contents_id
    JOIN(
        SELECT
          item.id AS item_id,
          property_type_contents.content AS type_content,
          JSON_ARRAYAGG(properties.content) AS property
        FROM item
        JOIN item_properties ON item_id = item.id
        JOIN properties ON properties.id = item_properties.properties_id
        JOIN property_type_contents ON property_type_contents.id = properties.property_type_contents_id
        GROUP BY item.id, property_type_contents.content
        ) item_type_property ON item_type_property.item_id = item.id
    WHERE type_content = property_type_contents.content and 2_level_category.content = '${category}'
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
      return result;
}

async function searchCategory(category) {
  const result = await dataSource.query(`
    select content from 1_level_category where content = '${category}'
  `)
  return result;
}

module.exports = {
  filter,
  searchCategory,
  filter2,
};