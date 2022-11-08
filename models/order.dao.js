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

async function createOrder(userId) {
  return await database.query(
    `
        INSERT INTO
        orders ( order_number, total_price, users_id, orders.address)
      SELECT
        concat(cart_item.users_id,"-",now()) as order_number,
        sum(price) as total_price,
        cart_item.users_id as users_id,
        concat(
          zipcode,
          " ",
          street_address,
          " ",
          supplimental_address
        ) AS order_address
      FROM
        cart_item
        JOIN item_size_price ON cart_item.item_size_id = item_size_price.id
        JOIN order_contract ON cart_item.users_id = order_contract.user_id
      WHERE users_id = ${userId}
      GROUP BY
        order_number,
        cart_item.users_id,
        order_address
    `
  );
}

async function createOrderItems(userId, ordersId) {
  return await database.query(
    `
      INSERT INTO
        order_item ( order_id, item_size_id, quantity)
      SELECT
        ${ordersId},
        item_size_id,
        quantity
      FROM
        cart_item
      WHERE
        users_id = ${userId}
    `
  );
}

async function deleteAllCartItems(userId) {
  return await database.query(
    `
      DELETE
        FROM cart_item
      WHERE users_id = ${userId}
    `
  );
}

async function existCartItemsByUserId(userId) {
  return await database
    .query(
      `
    SELECT
      EXISTS(
        SELECT
          *
        FROM
          cart_item
        WHERE
          users_id = ${userId}
      ) AS Result;
  `
    )
    .then(v => {
      const [result] = v;
      return !!Number(result.Result);
    });
}

async function findAllOrderByUserId(userId) {
  return await database.query(
    `
      SELECT
        total_price,
        address,
        created_at
      FROM
        orders
      WHERE
        users_id = ${userId}
    `);
}

async function findAllOrderByUserId(userId) {
  return await database.query(
    `
      SELECT
        total_price,
        address,
        created_at
      FROM
        orders
      WHERE
        users_id = ${userId}
    `);
}

module.exports = {
  createOrderContract,
  findOrderContract,
  updateOrderContract,
  createOrder,
  createOrderItems,
  deleteAllCartItems,
  existCartItemsByUserId,
  findAllOrderByUserId,
};
