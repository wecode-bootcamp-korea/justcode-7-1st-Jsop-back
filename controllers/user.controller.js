const userService = require('../services/user.service');
const utils = require('../utils/myutils');

async function signup(req, res) {
  const { first_name, last_name, email, password } = req.body;
  utils.checkDataIsNotEmpty({ first_name, last_name, email, password });
  await userService.signup(first_name, last_name, email, password);
  res.json({ message: 'USER_CREATED' });
}

async function login(req, res) {
  const { email, password } = req.body;
  utils.checkDataIsNotEmpty({ email, password });
  const result = await userService.login(email, password);
  res.json({ message: 'loginSuccess', token: result });
}

async function getMe(req, res) {
  const userInfo = await userService.getMe(req.userInfo.id);
  res.json({ userInfo });
}

module.exports = {
  signup,
  login,
  getMe,
};
