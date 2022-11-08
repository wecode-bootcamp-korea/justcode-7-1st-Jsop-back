const express = require('express');
const middleware = require('../middlewares/middleware');
const userRouter = require('./user');
const productRouter = require('./product.route');
const categoryRouter = require('./category.route');
const orderRouter = require('./order.route');

const router = express.Router();

router.use(userRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);
router.use('/categories', categoryRouter);
router.use(middleware.errorHandler);

module.exports = router;
