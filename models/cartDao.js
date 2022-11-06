const dataSource = require('./database');

// 카트에 담기
const addToCart = async (userId, item_size_id, quantity) => {
  const addList = await dataSource.query(
    `INSERT INTO cart_item
    (users_id, item_size_id , quantity)
    VALUES
    (${userId},${item_size_id},${quantity})`
  );

  return addList;
};

// 카트 보기
const showToCart = async userId => {
  const showList = await dataSource.query(
    `SELECT
    cart_item.id as cart_item_id,
    cart_item.users_id,
    cart_item.item_size_id,
    item.title as title,
    item.img_url as image,
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
    users_id = ${userId}`
  );

  return showList;
};

// 카트 내역 수정하기
const editToCart = async (userId, item_size_id, quantity) => {
  const editList = await dataSource.query(
    `UPDATE cart_item
      SET quantity = ${quantity}
      WHERE item_size_id = ${item_size_id}
      AND users_id = ${userId}`
  );

  return editList;
};

// 카트 내 아이템 삭제하기
const deleteToCart = async (userId, cart_item_id) => {
  const deleteList = await dataSource.query(
    `DELETE FROM cart_item
    WHERE id = ${cart_item_id}
    AND users_id = ${userId}`
  );

  return deleteList;
};

module.exports = { addToCart, showToCart, editToCart, deleteToCart };
