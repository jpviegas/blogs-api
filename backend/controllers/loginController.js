const jwt = require('jsonwebtoken');

const secret = 'token';
const jwtConfig = { algorithm: 'HS256', expiresIn: '1d' };
const login = async (req, res) => {
  const token = jwt.sign(req.body, secret, jwtConfig);
  res.status(200).header('Authorization', token).json({ token });
};

module.exports = { login };
