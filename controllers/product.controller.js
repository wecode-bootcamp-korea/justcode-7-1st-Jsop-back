const productServ = require('../services/product.service');
const myUtil = require('../utils/myutils.js');

async function createProduct(req, res) {
  const { title, img_url, description, category, price, properties } = req.body;

  const product = { title, img_url, description, category, price, properties };
  myUtil.checkDataIsNotEmpty(product);
  await productServ.createProduct(product);
  res.status(201).json('created product');
}

async function test(req, res) {
  const result = await productServ.test();
  res.status(200).json(result);
}

async function getProduct(req, res) {
  let result;
  if (myUtil.isObjectEmpty(req.query)) {
    result = await productServ.getAllProduct();
  } else {
    let level_1_cate = req.query[`level-1-cate`];
    let level_2_cate = req.query[`level-2-cate`];
    level_1_cate = level_1_cate.replace('-', ' ');
    level_2_cate = level_2_cate.replace('-', ' ');
    result = await productServ.findProductByCategory(
      level_1_cate,
      level_2_cate
    );
  }
  res.status(200).json(result);
}

async function findProductById(req, res) {
  const result = await productServ.findProductById(req.params.Id);
  res.status(200).json(result);
}

module.exports = {
  createProduct,
  test,
  getProduct,
  findProductById,
};
