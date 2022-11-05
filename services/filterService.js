const filterDAO = require('../models/filterDAO');

async function filter(category) {
  const categorySearch = await filterDAO.searchCategory(category);
  console.log(categorySearch);
  if (categorySearch.length) {
    const result = await filterDAO.filter(category);
    console.log(`result :`, result);
    return result;
  } else {
    const result = await filterDAO.filter2(category);
    console.log(`result :`, result);
    return result;
  }
}

module.exports = {
  filter,
};
