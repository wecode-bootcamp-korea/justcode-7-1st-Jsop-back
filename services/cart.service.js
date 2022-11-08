const cartDao = require('../models/cart.dao');

// 카트에 담기
const createCart = async (userId, item_size_id, quantity) => {
  const createList = await cartDao.createCart(userId, item_size_id, quantity);
  return createList;
};

// 카트 보기
const findCartByUserId = async userId => {
  const readList = await cartDao.findCartByUserId(userId);
  return readList;
};

// 카트 내역 수정하기
const updateCart = async (userId, item_size_id, quantity) => {
  const updateList = await cartDao.updateCart(userId, item_size_id, quantity);
  return updateList;
};

// 카트 내 아이템 삭제하기
const deleteCart = async (userId, cart_item_id) => {
  const deleteList = await cartDao.deleteCart(userId, cart_item_id);
  return deleteList;
};

module.exports = { createCart, findCartByUserId, updateCart, deleteCart };
