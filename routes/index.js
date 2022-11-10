const express = require('express');
const middleware = require('../middlewares/middleware');
const userRouter = require('./user.route');
const productRouter = require('./product.route');
const categoryRouter = require('./category.route');
const cartRouter = require('./cart.router');
const orderRouter = require('./order.route');

const router = express.Router();
router.use(userRouter);
router.use('/products', productRouter);
router.use('/cart', cartRouter);
router.use('/orders', orderRouter);
router.use('/categories', categoryRouter);
router.use(express.static(__dirname + '/../public'));
router.use(middleware.errorHandler);

module.exports = router;
