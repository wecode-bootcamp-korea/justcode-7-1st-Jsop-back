const express = require('express');
const middleware = require('../middlewares/middleware');
const userRouter = require('./user');
const productRouter = require('./product.route');
const filterRouter = require('./filter');
const orderRouter = require('./order.route');
// const otherRouter = require('./other');

const router = express.Router();

router.use(userRouter);
router.use('/product', productRouter);
router.use(filterRouter);
router.use('/', orderRouter);
router.use(middleware.errorHandler);
// router.use(otherRouter);

module.exports = router;
