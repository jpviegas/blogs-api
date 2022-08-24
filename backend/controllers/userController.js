const jwt = require('jsonwebtoken');
const { Users } = require('../models');
const usersServices = require('../services/usersServices');

const findAllUsers = async (req, res) => {
  const result = await usersServices.findAllUsers();
  return res.status(200).json(result);
};

const createUser = async (req, res) => {
  const {
    displayName, email, password, image,
  } = req.body;
  const result = await usersServices.createUser({
    displayName,
    email,
    password,
    image,
  });
  return res.status(201).json(result);
};

const findUserById = async (req, res) => {
  const { id } = req.params;
  const result = await usersServices.findUserById(id);
  return res.status(200).json(result);
};

const destroyUser = async (req, res) => {
  const token = req.headers.authorization;
  const decode = jwt.verify(token, 'token');
  const { email } = decode;
  const result = await Users.findOne({ where: { email } });
  if (result) {
    const { id } = result.dataValues;
    await usersServices.destroyUser(id);
  }
  return res.status(204).json();
};

module.exports = {
  findAllUsers, createUser, findUserById, destroyUser,
};
