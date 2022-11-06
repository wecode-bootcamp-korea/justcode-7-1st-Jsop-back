const express = require('express');
const orderCtl = require('../controllers/order.controller');
const {asyncWrap} = require('../utils/myutils');
const mw = require('../middlewares/middleware');

const router = express.Router();

router.put('/orders/contract', asyncWrap(mw.authMiddleware), asyncWrap(orderCtl.putOrderContract));
router.get('/orders/contract', asyncWrap(mw.authMiddleware), asyncWrap(orderCtl.findOrderContract));

module.exports = router;
