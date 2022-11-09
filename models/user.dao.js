const dataSource = require('./database');

async function createUser(first_name, last_name, email, hashed_password) {
  const data = await dataSource.query(`
    INSERT INTO
      users (first_name, last_name, email, password)
    VALUES
      ('${first_name}', '${last_name}', '${email}', '${hashed_password}')
  `);
}

async function existUser(email) {
  const [user] = await dataSource.query(`
    SELECT
      id,
      email
    FROM
      users
    WHERE
      email = '${email}'
  `);
  return user;
}

async function findUserByEmail(email) {
  const [userInfo] = await dataSource.query(`
    SELECT
      id, first_name, last_name, email, password
    FROM
      users
    WHERE
      email = '${email}'
  `);
  return userInfo;
}

async function findUserById(userId) {
  const [userInfo] = await dataSource.query(`
    SELECT
      id, first_name, last_name, email
    FROM
      users
    WHERE
      id = '${userId}'
  `);
  return userInfo;
}

module.exports = {
  findUserByEmail,
  existUser,
  createUser,
  findUserByEmail,
  findUserById,
};
