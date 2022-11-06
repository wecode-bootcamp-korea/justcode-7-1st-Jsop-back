const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userDAO = require('../models/userDAO');

async function signup(first_name, last_name, email, password) {
  // email not include @ and .
  // if (!email.includes('@') || !email.includes('.')) {
  //   throw new Error('EMAIL_INVALID');
  // }
  const emailregex = /\S+@\S+\.\S+/;
  if (!emailregex.test(email)) {
    throw new Error('EMAIL_INVALID');
  }
  // email 주소 중복
  const existUSER = await userDAO.existUser(email);
  if (existUSER) {
    throw new Error('EMAIL_DUPLICATE');
  }

  const pwregex = /^(?=.*?[A-Z])(?=.*?[0-9]).{6,}$/;
  console.log(pwregex.test(password));
  if (!pwregex.test(password)) {
    throw new Error('PASSWORD_INVALID');
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
    throw new Error('EMAIL_INVALID');
  }
  // email이 존재하지 않을 때
  const findUserByEmail = await userDAO.findUserByEmail(email);

  if (!findUserByEmail) {
    throw new Error('USER_DOES_NOT_EXIST');
  }
  // 비밀번호가 틀림
  const isSame = bcrypt.compareSync(password, findUserByEmail.password);
  if (isSame === false) {
    throw new Error('PASSWORD_WRONG');
  }

  // 토큰 생성
  const token = jwt.sign({ id: findUserByEmail.id }, process.env.SECRET_KEY);
  return token;
}

module.exports = { signup, login };
