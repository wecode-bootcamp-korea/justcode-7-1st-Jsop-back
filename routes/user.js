const express = require('express');
const mw = require('../middlewares/middleware');
const utils = require('../utils/myutils');
const {
  signupController,
  loginController,
  getMe,
} = require('../controllers/userController');

const router = express.Router();

router.post('/signup', utils.asyncWrap(signupController));
router.post('/login', utils.asyncWrap(loginController));
router.get(
  '/getme',
  utils.asyncWrap(mw.authMiddleware),
  utils.asyncWrap(getMe)
);

module.exports = router;
