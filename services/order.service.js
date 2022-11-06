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

module.exports = {
  putOrderContract,
  findOrderContract,
};
