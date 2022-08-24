const { BlogPosts } = require('../../models');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const body = await BlogPosts.findOne({ where: { id } });
  if (!body) { return res.status(404).json({ message: 'Post does not exist' }); }
  return next();
};
