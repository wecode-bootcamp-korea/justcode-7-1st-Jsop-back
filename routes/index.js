const express = require('express');
const middleware = require('../middlewares/middleware');
const userRouter = require('./user');
const productRouter = require('./product.route');
// const otherRouter = require('./other');

const router = express.Router();

router.use(userRouter);
router.use('/products', productRouter);
router.use(middleware.errorHandler);
// router.use(otherRouter);

module.exports = router;
