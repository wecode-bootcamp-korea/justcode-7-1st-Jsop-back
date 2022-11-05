const jwt  = require('jsonwebtoken');

async function authMiddleware(req, _, next) {
	const token = req.headers.authorization;
	const decodedToken = decodeToken(token);
  req.userInfo = {id: decodedToken.id};
  next();
}

function decodeToken(token) {
  try {
    return jwt.verify(token, process.env.SECRET_KEY);
  } catch (err) {
    console.log(`err: ${err}`);
    throw {status: 401, message: "unauthorized"}
  }
}

const errorHandler = (err, _1, res, _2) => {
  // 흐름상 에러가 검출되면 로그 표시 및 클라이언트에게 전달
  let responseInfo = err;
  if (err.sqlMessage) {
    console.log(err.sqlMessage);
    responseInfo = {message: "failed", status: 500, ...err};
  }
  console.log("err LOG:", err);
  res.status(responseInfo.status || 500).send({ message: responseInfo.message || '' });
};

module.exports = {
  errorHandler,
  authMiddleware,
}
