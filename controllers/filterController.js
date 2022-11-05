const filterService = require('../services/filterService');

async function filter(req, res) {
  const { category } = req.body;
  const result = await filterService.filter(category);
  res.status(201).json(result);
}
module.exports = {
  filter,
};
