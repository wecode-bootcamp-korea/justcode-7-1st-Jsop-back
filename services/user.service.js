const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userDao = require('../models/user.dao');

async function signup(firstName, lastName, email, password) {
  // email not include @ and .
  const emailregex = /\S+@\S+\.\S+/;
  if (!emailregex.test(email)) {
    throw { message: '아이디는 이메일 형식이여야 합니다.', status: 400 };
  }
  // email 주소 중복
  const existUser = await userDao.existUser(email);
  if (existUser) {
    throw { message: '이미 존재하는 아이디입니다.', status: 400 };
  }

  const pwregex = /^(?=.*?[A-Z])(?=.*?[0-9]).{6,}$/;
  if (!pwregex.test(password)) {
    throw {
      message:
        '비밀번호는 대문자, 숫자를 포함하여 6자 이상으로 작성하여야 합니다.',
      status: 400,
    };
  }

  // 비밀번호 암호화
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());
  const createUser = await userDao.createUser(
    firstName,
    lastName,
    email,
    hashedPassword
  );
  return createUser;
}

async function login(email, password) {
  // email이 형식이 다를 때
  if (!email.includes('@') || !email.includes('.')) {
    throw { message: '아이디는 이메일 형식이여야 합니다.', status: 400 };
  }
  // email이 존재하지 않을 때
  const findUserByEmail = await userDao.findUserByEmail(email);

  if (!findUserByEmail) {
    throw {
      message: '아이디가 존재하지 않거나 비밀번호가 맞지 않습니다.',
      status: 400,
    };
  }
  // 비밀번호가 틀림
  const isSame = bcrypt.compareSync(password, findUserByEmail.password);
  if (isSame === false) {
    throw {
      message: '아이디가 존재하지 않거나 비밀번호가 맞지 않습니다.',
      status: 400,
    };
  }

  // 토큰 생성
  const token = jwt.sign({ id: findUserByEmail.id }, process.env.SECRET_KEY);
  return token;
}

async function getMe(userId) {
  const userInfo = await userDao.findUserById(userId);
  return userInfo;
}

module.exports = {
  signup,
  login,
  getMe,
};
