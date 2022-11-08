const express = require('express');
const orderCtl = require('../controllers/order.controller');
const { asyncWrap } = require('../utils/myutils');
const mw = require('../middlewares/middleware');

const router = express.Router();

router.put(
  '/contract',
  asyncWrap(mw.authMiddleware),
  asyncWrap(orderCtl.putOrderContract)
);
router.get(
  '/contract',
  asyncWrap(mw.authMiddleware),
  asyncWrap(orderCtl.findOrderContract)
);

router.post('/', asyncWrap(mw.authMiddleware), asyncWrap(orderCtl.createOrder));
router.get('/', asyncWrap(mw.authMiddleware), asyncWrap(orderCtl.findAllOrder));

module.exports = router;
