const { Users } = require('../../models');

async function getEm(res, email) {
  const getEmail = await Users.findOne({ where: { email } });
  if (email === getEmail.dataValues.email) {
    return res.status(409).json({ message: 'User already registered' });
  }
}

module.exports = async (req, res, next) => {
  const { email } = req.body;
  if (email === null || email === undefined) {
    return res.status(400).json({ message: '"email" is required' });
  }
  const regex = /\S+@\S+.\S\.+com/;
  if (!regex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  const emailExists = await Users.findOne({ where: { email } });

  if (emailExists) { return getEm(res, email); }
  return next();
};
