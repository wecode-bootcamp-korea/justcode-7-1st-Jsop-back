const express = require('express');
const cateCtl = require('../controllers/category.controller');
const {asyncWrap} = require('../utils/myutils');
const mw = require('../middlewares/middleware');

const router = express.Router();

router.get('/', asyncWrap(cateCtl.getAllCategories));

module.exports = router;
