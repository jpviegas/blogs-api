const express = require('express');

const router = express.Router();
const validateUserName = require('../middlewares/createUserValidations/validateUserDisplayname');
const validateUserEmail = require('../middlewares/createUserValidations/validateUserEmail');
const validateUserPassword = require('../middlewares/createUserValidations/validateUserPassword');
const validateUserImage = require('../middlewares/createUserValidations/validateUserImage');
const validateToken = require('../middlewares/createUserValidations/validateToken');
const validateUserIdExists = require('../middlewares/getUserIdValidations/validateUserIdExists');
const {
  findAllUsers, createUser, findUserById, destroyUser,
} = require('../controllers/userController');

router
  .route('/')
  .get(validateToken, findAllUsers)
  .post(
    validateUserName,
    validateUserEmail,
    validateUserPassword,
    validateUserImage,
    createUser,
  );

router
  .route('/:id')
  .get(validateToken, validateUserIdExists, findUserById);

router.route('/me').delete(validateToken, destroyUser);
module.exports = router;
