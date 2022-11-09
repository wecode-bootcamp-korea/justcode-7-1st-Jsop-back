const categoryDao = require('../models/category.dao');

async function getAllCategories() {
  return await categoryDao.getAllCategories();
}

module.exports = {
  getAllCategories,
};
