const cartDao = require('../models/cart.dao');

// 카트에 담기
const createCart = async (userId, item_id, quantity) => {
  const isExists = await cartDao.existCart(userId, item_id);
  if (isExists) return await cartDao.plusQuantity(userId, item_id);
  return await cartDao.createCart(userId, item_id, quantity);
};

// 카트 보기
const findCartByUserId = async userId => {
  const findList = await cartDao.findCartByUserId(userId);
  return findList;
};

// 카트 내역 수정하기
const updateCart = async (userId, item_id, quantity) => {
  const updateList = await cartDao.updateCart(userId, item_id, quantity);
  return updateList;
};

// 카트 내 아이템 삭제하기
const deleteCart = async (userId, item_id) => {
  const deleteList = await cartDao.deleteCart(userId, item_id);
  return deleteList;
};

module.exports = { createCart, findCartByUserId, updateCart, deleteCart };
