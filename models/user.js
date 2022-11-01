const dataSource = require('./database');

// 구현이 되면 삭제합니다.
async function createUser() {
  const [userInfo] = await dataSource.query(`
  SELECT
    id,
    password
  FROM users
  WHERE
  email = ?
  `,
    ['coconut@gmail.com']
  );
  return userInfo;
}

function readUserByEmail(email) {}

module.exports = { createUser, readUserByEmail };
