const { Users } = require('../../models');

module.exports = async (req, res, next) => {
  const { email } = req.body;
  if (email === undefined) { return res.status(400).json({ message: '"email" is required' }); }
  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  const emailExists = await Users.findOne({ where: { email } });
  if (!emailExists || (email !== emailExists.dataValues.email)) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  return next();
};
