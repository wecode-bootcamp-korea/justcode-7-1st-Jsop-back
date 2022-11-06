const userService = require('../services/userService');

async function signupController(req, res) {
  try {
    const { first_name, last_name, email, password } = req.body;
    REQUIRED_KEYS = [first_name, last_name, email, password];
    Object.keys(REQUIRED_KEYS).map(key => {
      if (!REQUIRED_KEYS[key]) {
        throw new Error(`KEY_ERROR: ${key}`);
      }
    });

    userService.signup(first_name, last_name, email, password);
    res.json({ message: 'USER_CREATED' });
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
}

async function loginController(req, res) {
  try {
    const { email, password } = req.body;

    const REQUIRED_KEYS = [email, password];
    Object.keys(REQUIRED_KEYS).map(key => {
      if (!REQUIRED_KEYS[key]) {
        throw new Error(`KEY_ERROR: ${key}`);
      }
    });
    const result = await userService.login(email, password);
    res.json({ message: 'loginSuccess', token: result });
  } catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
}

async function getMe(req, res) {
  const userInfo = await userService.getMe(req.userInfo.id);
  res.json({userInfo});
}

module.exports = {
  signupController,
  loginController,
  getMe,
};
