const database = require('./database');

async function createOrderContract(userId, zipcode, streetAddress, supAddress) {
  return await database.query(
    `
        INSERT INTO
          order_contract(user_id, zipcode, street_address, supplimental_address)
        VALUES
          (?, ?, ?, ?)

    `,
    [userId, zipcode, streetAddress, supAddress]
  );
}

async function findOrderContract(userId) {
  return await database.query(
    `
      SELECT
        zipcode,
        street_address,
        supplimental_address
      FROM
        order_contract
      WHERE
        user_id = ${userId}
    `
  );
}

async function updateOrderContract(userId, zipcode, streetAddress, supAddress) {
  return await database.query(
    `
      UPDATE
        order_contract
      SET
        zipcode = '${zipcode}',
        street_address = '${streetAddress}',
        supplimental_address = '${supAddress}'
      WHERE
        user_id = ${userId}
    `
  );
}

module.exports = {
  createOrderContract,
  findOrderContract,
  updateOrderContract,
};
