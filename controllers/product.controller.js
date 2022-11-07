const productServ = require('../services/product.service');
const myUtil = require('../utils/myutils.js');

async function createProduct(req, res) {
  const { title, img_url, description, category, price, properties } = req.body;

  const product = { title, img_url, description, category, price, properties };
  myUtil.checkDataIsNotEmpty(product);
  console.log(`req.body :`, req.body);
  await productServ.createProduct(product);
  res.status(201).json('created product');
}

async function test(req, res) {
  const result = await productServ.getAllProduct();
  res.status(200).json(result);
}

async function getAllProduct(req, res) {
  const result = await productServ.getAllProduct();
  res.status(200).json(result);
}

async function filter(req, res) {
  const level_1_cate = req.query.level_1_cate;
  const level_2_cate = req.query.level_2_cate;
  const result = await productServ.filter(level_1_cate, level_2_cate);
  res.status(200).json(result);
}

async function search(req, res) {
  const result = await productServ.searchById(req.params.Id);
  res.status(200).json(result);
}

module.exports = { createProduct, test, getAllProduct, filter, search };
