const express = require('express');
const { login } = require('../controllers/loginController');

const router = express.Router();
const validateEmail = require('../middlewares/loginValidations/validateEmail');
const validatePassword = require('../middlewares/loginValidations/validatePassword');

router
  .route('/')
  .post(validateEmail, validatePassword, login);

module.exports = router;
