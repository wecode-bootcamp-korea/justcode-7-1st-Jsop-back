const dataSource = require('./database');

// 카트에 담기
const createCart = async (userId, item_size_id, quantity) => {
  const createList = await dataSource.query(
    `
      INSERT INTO
        cart_item
        (users_id, item_size_id , quantity)
      VALUES
      (${userId},${item_size_id},${quantity})
      
    `
  );

  return createList;
};

// 카트 보기
const findCartByUserId = async userId => {
  const readList = await dataSource.query(
    `
      SELECT
        cart_item.id AS cart_item_id,
        item_size_price.item_id,
        cart_item.item_size_id,
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
  );

  return readList;
};

// 카트 내역 수정하기
const updateCart = async (userId, item_size_id, quantity) => {
  const updateList = await dataSource.query(
    `
      UPDATE
        cart_item
      SET
        quantity = ${quantity}
      WHERE
        item_size_id = ${item_size_id}
      AND
        users_id = ${userId}

    `
  );

  return updateList;
};

// 카트 내 아이템 삭제하기
const deleteCart = async (userId, cart_item_id) => {
  const deleteList = await dataSource.query(
    `
      DELETE FROM
        cart_item
     WHERE
        id = ${cart_item_id}
      AND
        users_id = ${userId}
        
    `
  );

  return deleteList;
};

module.exports = { createCart, findCartByUserId, updateCart, deleteCart };
