const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const validateToken = async (req, res, next) => {
  try {
    const token = await req.header('authorization');

    const decoded = await jwt.verify(token, secretKey);

    req.user = decoded;

    next();
  } catch (err) {
    res.status(401).json({ message: 'INVALID_TOKEN' });
  }
};

module.exports = {
  validateToken,
};
