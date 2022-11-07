const cartDao = require('../models/cart.dao');

// 카트에 담기
const addToCart = async (userId, item_size_id, quantity) => {
  const addList = await cartDao.addToCart(userId, item_size_id, quantity);
  return addList;
};

// 카트 보기
const showToCart = async userId => {
  const showList = await cartDao.showToCart(userId);
  return showList;
};

// 카트 내역 수정하기
const editToCart = async (userId, item_size_id, quantity) => {
  const editList = await cartDao.editToCart(userId, item_size_id, quantity);
  return editList;
};

// 카트 내 아이템 삭제하기
const deleteToCart = async (userId, cart_item_id) => {
  const deleteList = await cartDao.deleteToCart(userId, cart_item_id);
  return deleteList;
};

module.exports = { addToCart, showToCart, editToCart, deleteToCart };
