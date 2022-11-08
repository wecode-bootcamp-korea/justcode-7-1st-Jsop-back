const orderServ = require('../services/order.service');
const myUtil = require('../utils/myutils.js');

async function putOrderContract(req, res) {
  const { zipcode, street_address, supplimental_address } = req.body;
  const userId = req.userInfo.id;
  myUtil.checkDataIsNotEmpty({
    zipcode,
    street_address,
    supplimental_address,
    userId,
  });
  await orderServ.putOrderContract(
    userId,
    zipcode,
    street_address,
    supplimental_address
  );
  res.status(201).json({ message: 'UPDATED_SUCCESSFULLY' });
}

async function findOrderContract(req, res) {
  const result = await orderServ.findOrderContract(req.userInfo.id);
  res.status(200).json(result);
}

async function createOrder(req, res) {
  const result = await orderServ.createOrder(req.userInfo.id);
  res.status(201).json({ message: 'ADD_SUCCESSFULLY' });
}

async function findAllOrder(req, res) {
  const result = await orderServ.findAllOrderByUserId(req.userInfo.id);
  res.status(200).json({ result });
}

module.exports = {
  putOrderContract,
  findOrderContract,
  createOrder,
  findAllOrder,
};
