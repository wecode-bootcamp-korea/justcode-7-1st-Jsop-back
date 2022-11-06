const filterDAO = require('../models/filterDAO');

async function filter(category) {
  const categorySearch = await filterDAO.searchCategory(category);
  if (categorySearch.length) {
    const result = await filterDAO.findProductByCategory1(category);
    console.log(`result :`, result);
    return result;
  } else {
    const result = await filterDAO.findProductByCategory2(category);
    console.log(`result :`, result);
    return result;
  }
}

module.exports = {
  filter,
};
