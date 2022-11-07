const filterService = require('../services/filterService');

async function filter(req, res) {
  const { category } = req.body;
  const result = await filterService.filter(category);
  res.status(200).json(result);
}

module.exports = {
  filter,
};
