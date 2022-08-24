const express = require('express');
const { findAllCategories, createCategory } = require('../controllers/categoryController');
const validateCategory = require('../middlewares/createCategoryValidations/validateCategory');
const validateToken = require('../middlewares/createUserValidations/validateToken');

const router = express.Router();

router
  .route('/')
  .get(validateToken, findAllCategories)
  .post(validateToken, validateCategory, createCategory);

module.exports = router;
