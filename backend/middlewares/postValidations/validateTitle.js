// const { Categories } = require('../../models/sequelize');

module.exports = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title) { return res.status(400).json({ message: '"title" is required' }); }
  if (!content) { return res.status(400).json({ message: '"content" is required' }); }
  if (!categoryIds) { return res.status(400).json({ message: '"categoryIds" is required' }); }
  if (categoryIds > 2) { return res.status(400).json({ message: '"categoryIds" not found' }); }
  return next();
};
