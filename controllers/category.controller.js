const cateServ = require('../services/category.service');

async function getAllCategories(req, res) {
  const result = await cateServ.getAllCategories();
  res.status(200).json(result);
}

module.exports = {
  getAllCategories,
};
