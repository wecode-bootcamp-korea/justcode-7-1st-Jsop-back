const express = require('express');
const mw = require('../middlewares/middleware');
const utils = require('../utils/myutils');
const {
  signupController,
  loginController,
  getMe,
} = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signupController);
router.post('/login', loginController);
router.get('/getme', mw.authMiddleware, utils.asyncWrap(getMe));

module.exports = router;
