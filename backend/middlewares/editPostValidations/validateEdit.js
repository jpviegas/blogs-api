const jwt = require('jsonwebtoken');
const { BlogPosts, Users } = require('../../models');
const postsServices = require('../../services/postsServices');

module.exports = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.params;
  const token = req.headers.authorization;
  const decode = jwt.verify(token, 'token');
  const loggedUser = decode.email;
  const verifyUser = await Users.findOne({ where: { id } });
  const postUser = verifyUser.dataValues.email;
  if (categoryIds) { return res.status(400).json({ message: 'Categories cannot be edited' }); }
  if ((loggedUser === postUser)) {
    await BlogPosts.update({ title, content }, { where: { id } });
    const result = await postsServices.findPostById(id);
    return res.status(200).json(result);
  }
  if (loggedUser !== postUser) { return res.status(401).json({ message: 'Unauthorized user' }); }
  return next();
};
