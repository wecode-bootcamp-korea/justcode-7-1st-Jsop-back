const express = require('express');
const cartController = require('../controllers/cart.controller');
const { asyncWrap } = require('../utils/myutils');
const mw = require('../middlewares/middleware');

const router = express.Router();

router.post('/', asyncWrap(mw.authMiddleware), cartController.addToCart);
router.get('/', asyncWrap(mw.authMiddleware), cartController.showToCart);
router.put('/', asyncWrap(mw.authMiddleware), cartController.editToCart);
router.delete('/', asyncWrap(mw.authMiddleware), cartController.deleteToCart);

module.exports = router;
