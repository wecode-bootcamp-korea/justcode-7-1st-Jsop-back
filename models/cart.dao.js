const dataSource = require('./database');

// 카트에 담기
const createCart = async (userId, item_id, quantity) => {
  const createList = await dataSource.query(
    `
      INSERT INTO
        cart_item
        (users_id, item_size_id , quantity)
      VALUES
      (${userId},${item_id},${quantity})

    `
  );

  return createList;
};

const existCart = async (userId, item_id) => {
  const [result] = await dataSource.query(
    `
      SELECT EXISTS (
        SELECT * FROM
          cart_item
        WHERE
          users_id = ${userId}
        AND
          item_size_id = ${item_id})
        AS isExists

    `
  );

  return result.isExists;
};

const plusQuantity = async (userId, item_id) => {
  const result = await dataSource.query(
    `
      UPDATE
        cart_item
      SET
        quantity = quantity + 1
      WHERE
        users_id = ${userId}
      AND
        item_size_id = ${item_id}

    `
  );
  return result;
};

// 카트 보기
const findCartByUserId = async userId => {
  const findList = await dataSource
    .query(
      `
      SELECT
        cart_item.id AS cart_item_id,
        cart_item.item_size_id AS item_id,
        item.title AS title,
        item.img_url AS image,
        size.size,
        cart_item.quantity,
        item_size_price.price
      FROM
        item, size, cart_item, item_size_price
      WHERE
        item.id = item_size_price.item_id
      AND
        size.id = item_size_price.size_id
      AND
        cart_item.item_size_id = item_size_price.id
      AND
        users_id = ${userId}

    `
    )
    .then(cartList => {
      return cartList.map(cartItem => {
        return { ...cartItem, price: Number(cartItem.price) };
      });
    });

  return findList;
};

// 카트 내역 수정하기
const updateCart = async (userId, item_id, quantity) => {
  const updateList = await dataSource.query(
    `
      UPDATE
        cart_item
      SET
        quantity = ${quantity}
      WHERE
        item_size_id = ${item_id}
      AND
        users_id = ${userId}
    `
  );

  return updateList;
};

// 카트 내 아이템 삭제하기
const deleteCart = async (userId, item_id) => {
  const deleteList = await dataSource.query(
    `
      DELETE FROM
        cart_item
      WHERE
        item_size_id = ${item_id}
      AND
        users_id = ${userId}
    `
  );

  return deleteList;
};

module.exports = {
  createCart,
  existCart,
  plusQuantity,
  findCartByUserId,
  updateCart,
  deleteCart,
};
