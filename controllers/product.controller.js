const productServ = require('../services/product.service');
const myUtil = require('../utils/myutils.js');

async function createProduct(req, res) {
  const { title, img_url, description, category, price, properties } = req.body;

  const product = { title, img_url, description, category, price, properties };
  myUtil.checkDataIsNotEmpty(product);
  await productServ.createProduct(product);
  res.status(201).json('created product');
}

async function getProduct(req, res) {
  let result;
  const productId = req.params.id;
  let level_1_category = req.query[`level-1-cate`]?.replace('-', ' ');
  let level_2_category = req.query[`level-2-cate`]?.replace('-', ' ');
  result = await productServ.getProducts({
    productId,
    level_1_category,
    level_2_category,
  });
  res.status(200).json(result);
}

module.exports = {
  createProduct,
  getProduct,
};
