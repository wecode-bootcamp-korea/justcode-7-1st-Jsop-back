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
  const result = await productServ.getAllProduct();
  res.status(200).json(result);
}

async function getAllProduct(req, res) {
  const result = await productServ.getAllProduct();
  res.status(200).json(result);
}

module.exports = { createProduct, test, getAllProduct };
