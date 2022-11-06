const express = require('express');

const router = express.Router();

const auth = require('../middlewares/auth');
const cartController = require('../controllers/cartController');

// 수정 필요
router.post('/', auth.validateToken, cartController.addToCart);
router.get('/', auth.validateToken, cartController.showToCart);
router.put('/', auth.validateToken, cartController.editToCart);
router.delete('/', auth.validateToken, cartController.deleteToCart);

module.exports = router;
