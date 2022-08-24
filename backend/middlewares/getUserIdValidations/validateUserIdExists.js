const { Users } = require('../../models');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const body = await Users.findOne({ where: { id } });
  if (!body) { return res.status(404).json({ message: 'User does not exist' }); }
  return next();
};
