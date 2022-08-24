const { Users } = require('../models');

const findAllUsers = async () => {
  const result = await Users.findAll({
    attributes: { exclude: 'password' },
  });
  return result;
};

const findUserById = async (id) => {
  const result = await Users.findByPk(id, {
    attributes: { exclude: 'password' },
  });
  return result;
};

const createUser = async (users) => {
  const result = await Users.create(users);
  return result;
};

const destroyUser = async (id) => {
  await Users.destroy({ where: { id } });
};

module.exports = {
  findAllUsers, findUserById, createUser, destroyUser,
};
