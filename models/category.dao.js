const database = require('./database');

async function getAllCategories() {
  return await database.query(
    `
    SELECT
      1_level_category.id AS id,
      1_level_category.content AS content,
      CONCAT('[', GROUP_CONCAT(JSON_OBJECT("id", 2_level_category.id, "content", 2_level_category.content)),']') AS sub_category
    FROM
      1_level_category
    JOIN
      2_level_category
    ON
      2_level_category.1_level_category_id = 1_level_category.id
    GROUP BY id, content
    `
  ).then(categories => {
    return [...categories].map((category)=> {
      return {...category, sub_category: JSON.parse(category.sub_category)}
    })
  })
}

module.exports = {
  getAllCategories,
}