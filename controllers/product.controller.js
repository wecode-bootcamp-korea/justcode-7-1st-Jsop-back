const productServ = require('../services/product.service');
const myUtil = require('../utils/myutils.js');

async function createProduct(req, res) {
  const {title, img_url, description, category, price, properties} = req.body;

  const product = {title, img_url, description, category, price, properties};
  myUtil.checkDataIsNotEmpty(product);
  console.log(`req.body :`, req.body);
  await productServ.createProduct(product);
  res.json("created product");
}

module.exports = { createProduct };