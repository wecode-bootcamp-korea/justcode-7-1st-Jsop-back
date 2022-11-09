function asyncWrap(asyncController) {
  return async (req, res, next) => {
    try {
      await asyncController(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}

function checkDataIsNotEmpty(targetData) {
  Object.keys(targetData).forEach(key => {
    if (!targetData[key]) throw { status: 400, message: `plz fill ${key}` };
  });
}

function isObjectEmpty(object) {
  return Object.keys(object).length === 0;
}

module.exports = {
  asyncWrap,
  checkDataIsNotEmpty,
  isObjectEmpty,
};
