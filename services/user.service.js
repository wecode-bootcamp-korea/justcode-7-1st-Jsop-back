const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userDAO = require('../models/user.dao');

async function signup(first_name, last_name, email, password) {
  // email not include @ and .
  const emailregex = /\S+@\S+\.\S+/;
  if (!emailregex.test(email)) {
    throw { message: '아이디는 이메일 형식이여야 합니다.' };
  }
  // email 주소 중복
  const existUSER = await userDAO.existUser(email);
  if (existUSER) {
    throw { message: '이미 존재하는 아이디입니다.' };
  }

  const pwregex = /^(?=.*?[A-Z])(?=.*?[0-9]).{6,}$/;
  if (!pwregex.test(password)) {
    throw {
      message:
        '비밀번호는 대문자, 숫자를 포함하여 6자 이상으로 작성하여야 합니다.',
    };
  }

  // 비밀번호 암호화
  const hashed_password = bcrypt.hashSync(password, bcrypt.genSaltSync());
  const createUSER = await userDAO.createUser(
    first_name,
    last_name,
    email,
    hashed_password
  );
  return createUSER;
}

async function login(email, password) {
  // email이 형식이 다를 때
  if (!email.includes('@') || !email.includes('.')) {
    throw { message: '아이디는 이메일 형식이여야 합니다.' };
  }
  // email이 존재하지 않을 때
  const findUserByEmail = await userDAO.findUserByEmail(email);

  if (!findUserByEmail) {
    throw { message: '아이디가 존재하지 않거나 비밀번호가 맞지 않습니다.' };
  }
  // 비밀번호가 틀림
  const isSame = bcrypt.compareSync(password, findUserByEmail.password);
  if (isSame === false) {
    throw { message: '아이디가 존재하지 않거나 비밀번호가 맞지 않습니다.' };
  }

  // 토큰 생성
  const token = jwt.sign({ id: findUserByEmail.id }, process.env.SECRET_KEY);
  return token;
}

async function getMe(userId) {
  const userInfo = await userDAO.findUserById(userId);
  return userInfo;
}

module.exports = {
  signup,
  login,
  getMe,
};
