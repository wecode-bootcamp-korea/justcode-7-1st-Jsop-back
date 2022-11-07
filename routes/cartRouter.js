const express = require('express');
const cartController = require('../controllers/cart.controller');
const { asyncWrap } = require('../utils/myutils');
const mw = require('../middlewares/middleware');

const router = express.Router();

router.post(
  '/',
  asyncWrap(mw.authMiddleware),
  asyncWrap(cartController.createCart)
);
router.get(
  '/',
  asyncWrap(mw.authMiddleware),
  asyncWrap(cartController.findCartByUserId)
);
router.put(
  '/',
  asyncWrap(mw.authMiddleware),
  asyncWrap(cartController.updateCart)
);
router.delete(
  '/',
  asyncWrap(mw.authMiddleware),
  asyncWrap(cartController.deleteCart)
);

module.exports = router;
