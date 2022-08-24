const { BlogPosts } = require('../../models');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const postExists = await BlogPosts.findOne({ where: { id } });
  // if (+id) {
  //   return res.status(401).json({ message: 'Unauthorized user' });
  // }
  if (!postExists) { return res.status(404).json({ message: 'Post does not exist' }); }
  return next();
};
