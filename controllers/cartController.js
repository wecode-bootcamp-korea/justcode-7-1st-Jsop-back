const cartService = require('../services/cartService');

// 카트에 담기
const addToCart = async (req, res) => {
  try {
    const { item_size_id, quantity } = req.body;
    const userId = req.user.id;

    // 필수 키값 존재 유무
    const REQUIRED_KEYS = { userId, item_size_id, quantity };
    Object.keys(REQUIRED_KEYS).map(key => {
      if (!REQUIRED_KEYS[key]) {
        const error = new Error(`KEY_ERROR: ${key}`);
        error.statusCode = 400;
        throw error;
      }
    });

    await cartService.addToCart(userId, item_size_id, quantity);

    res.status(201).json({ message: 'ADD_SUCCESSFULLY' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

// 카트 보기
const showToCart = async (req, res) => {
  try {
    const userId = req.user.id;

    // 필수 키값 존재 유무
    const REQUIRED_KEYS = { userId };
    Object.keys(REQUIRED_KEYS).map(key => {
      if (!REQUIRED_KEYS[key]) {
        const error = new Error(`KEY_ERROR: ${key}`);
        error.statusCode = 400;
        throw error;
      }
    });

    const cartList = await cartService.showToCart(userId);

    res.status(200).json({ message: 'SHOW_CARTLIST', data: cartList });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

// 카트 내역 수정하기
const editToCart = async (req, res) => {
  try {
    const { item_size_id, quantity } = req.body;
    const userId = req.user.id;

    // 필수 키값 존재 유무
    const REQUIRED_KEYS = { item_size_id, quantity };
    Object.keys(REQUIRED_KEYS).map(key => {
      if (!REQUIRED_KEYS[key]) {
        const error = new Error(`KEY_ERROR: ${key}`);
        error.statusCode = 400;
        throw error;
      }
    });

    await cartService.editToCart(userId, item_size_id, quantity);

    res.status(201).json({ message: 'EDIT_SUCCESSFULLY' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

// 카트 내 아이템 삭제하기
const deleteToCart = async (req, res) => {
  try {
    const { cart_item_id } = req.body;
    const userId = req.user.id;

    // 필수 키값 존재 유무
    const REQUIRED_KEYS = { userId, cart_item_id };
    Object.keys(REQUIRED_KEYS).map(key => {
      if (!REQUIRED_KEYS[key]) {
        const error = new Error(`KEY_ERROR: ${key}`);
        error.statusCode = 400;
        throw error;
      }
    });

    await cartService.deleteToCart(userId, cart_item_id);

    res.status(201).json({ message: 'DELETE_SUCCESSFULLY' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

module.exports = { addToCart, showToCart, editToCart, deleteToCart };
