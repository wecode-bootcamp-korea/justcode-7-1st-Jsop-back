const orderDao = require('../models/order.dao');

async function putOrderContract(userId, zipcode, streetAddress, supAddress) {
  // 기존에 DB에 있는 지 확인
  const [contract] = await orderDao.findOrderContract(...arguments);
  // 있으면 업데이트
  if (contract) {
    return await orderDao.updateOrderContract(...arguments);
  }

  // 없으면 추가
  const result = await orderDao.createOrderContract(...arguments);
  return result;
}

async function findOrderContract(userId) {
  const [contract] = await orderDao.findOrderContract(userId);
  return contract;
}

async function createOrder(userId) {
  console.log(`userId: `, userId);
  // 카트 리스트 확인
  const bExistCartItems = await orderDao.existCartItemsByUserId(userId);
  // 카트 내 리스트가 없으면 빠꾸
  if (!bExistCartItems) {
    throw { status: 400, message: '카트 내 리스트가 없습니다.' };
  }
  // 주문 기입서 확인
  const [contract] = await orderDao.findOrderContract(userId);
  if (!contract) {
    // 주문 기입서에 다 작성되어 있지 않으면 빠꾸
    throw { status: 400, message: '주문 주소가 작성되지 않았습니다.' };
  }
  // order 생성
  const orderResult = await orderDao.createOrder(userId);
  // order Item 생성
  const createResult = await orderDao.createOrderItems(
    userId,
    orderResult.insertId
  );
  // 기존 카트 아이템 제거
  await orderDao.deleteAllCartItems(userId);
}

async function findAllOrder(userId) {
  const [contract] = await orderDao.findAllOrderByUserId(userId);
  return contract;
}

module.exports = {
  putOrderContract,
  findOrderContract,
  createOrder,
  findAllOrder,
};
