const { Users } = require('../../models');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;
  if (password === undefined) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  const emailExists = await Users.findOne({ where: { email } });
  if (password !== emailExists.dataValues.password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  return next();
};
