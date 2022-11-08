const express = require('express');
const productCtl = require('../controllers/product.controller');
const { asyncWrap } = require('../utils/myutils');

const router = express.Router();
router.post('/', asyncWrap(productCtl.createProduct));
router.get('/', asyncWrap(productCtl.getAllProduct));
router.get('/test', asyncWrap(productCtl.test));

module.exports = router;
