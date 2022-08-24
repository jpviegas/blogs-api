const { Categories } = require('../models');

const findAllCategories = async () => {
  const result = await Categories.findAll();
  return result;
};

const createCategory = async (categories) => {
  const result = await Categories.create(categories);
  return result;
};

const destroyCategory = async (id) => {
  await Categories.destroy({ where: { id } });
};

module.exports = { findAllCategories, createCategory, destroyCategory };
