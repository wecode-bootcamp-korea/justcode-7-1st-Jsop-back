const cartService = require('../services/cart.service');
const myUtil = require('../utils/myutils.js');

// 카트에 담기
const createCart = async (req, res) => {
  try {
    const { item_id, quantity } = req.body;
    const userId = req.userInfo.id;

    // 필수 키값 존재 유무
    myUtil.checkDataIsNotEmpty({
      userId,
      item_id,
      quantity,
    });

    await cartService.createCart(userId, item_id, quantity);

    res.status(201).json({ message: 'CREATE_SUCCESSFULLY' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 카트 보기
const findCartByUserId = async (req, res) => {
  try {
    const userId = req.userInfo.id;

    myUtil.checkDataIsNotEmpty({
      userId,
    });

    const findList = await cartService.findCartByUserId(userId);

    res.status(200).json({ message: 'FIND_CARTLIST', data: findList });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 카트 내역 수정하기
const updateCart = async (req, res) => {
  try {
    const { item_id, quantity } = req.body;
    const userId = req.userInfo.id;

    myUtil.checkDataIsNotEmpty({
      userId,
      item_id,
      quantity,
    });

    await cartService.updateCart(userId, item_id, quantity);

    res.status(201).json({ message: 'UPDATE_SUCCESSFULLY' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 카트 내 아이템 삭제하기
const deleteCart = async (req, res) => {
  try {
    const { item_id } = req.body;
    const userId = req.userInfo.id;

    myUtil.checkDataIsNotEmpty({
      userId,
      item_id,
    });

    await cartService.deleteCart(userId, item_id);

    res.status(204).json({ message: 'DELETE_SUCCESSFULLY' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { createCart, findCartByUserId, updateCart, deleteCart };
