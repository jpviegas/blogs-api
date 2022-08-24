const jwt = require('jsonwebtoken');
const { Users } = require('../models');
const postsServices = require('../services/postsServices');

const findAllPosts = async (_req, res) => {
  const result = await postsServices.findAllPosts();
  return res.status(200).json(result);
};

const createPost = async (req, res) => {
  const { title, content } = req.body;
  const result = await postsServices.createPost({
    title,
    content,
  });
  return res.status(201).json(result);
};

const findPostById = async (req, res) => {
  const { id } = req.params;
  const result = await postsServices.findPostById(id);
  return res.status(200).json(result);
};

const editPostById = async (req, res) => {
  const { title, content } = req.body;
  const result = await postsServices.editPostById({ title, content });
  res.status(200).json(result);
};

const destroyPost = async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  // console.log(token);
  const decode = jwt.verify(token, 'token');
  const result = await Users.findByPk(id);
  // console.log('d:', decode.email);
  // console.log('r:', result.dataValues.email);
  if (decode.email === result.dataValues.email) {
    await postsServices.destroyPost(id);
    return res.status(204).json();
  }
  return res.status(401).json({ message: 'Unauthorized user' });
};

module.exports = {
  findAllPosts, createPost, findPostById, editPostById, destroyPost,
};
