const { BlogPosts, Users, Categories } = require('../models');

const findAllPosts = async () => {
  const result = await BlogPosts.findAll({
    attributes: { exclude: ['userId', 'UserId'] },
    include: [{ model: Users, as: 'user', attributes: { exclude: 'password' } },
      { model: Categories, as: 'categories' }],
  });
  return result;
};

const findPostById = async (id) => {
  const result = await BlogPosts.findByPk(id, {
    attributes: { exclude: ['UserId'] },
    include: [{ model: Users, as: 'user', attributes: { exclude: 'password' } },
      { model: Categories, as: 'categories' }],
  });
  return result;
};

const editPostById = async (blogpost) => {
  console.log(blogpost);
};

const createPost = async (blogposts) => {
  const result = await BlogPosts.create(blogposts);
  return result;
};

const destroyPost = async (id) => {
  await BlogPosts.destroy({ where: { id }, cascade: true, force: true });
};

module.exports = {
  findAllPosts, findPostById, editPostById, createPost, destroyPost,
};
