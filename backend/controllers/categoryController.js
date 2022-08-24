const categoriesServices = require('../services/categoriesServices');

const findAllCategories = async (_req, res) => {
  const result = await categoriesServices.findAllCategories();
  return res.status(200).json(result);
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  const result = await categoriesServices.createCategory({ name });
  return res.status(201).json(result);
};

module.exports = { findAllCategories, createCategory };
