const express = require('express');

const router = express.Router();
const validateToken = require('../middlewares/createUserValidations/validateToken');
// const validateTitle = require('../middlewares/postValidations/validateTitle');
const validatePostIdExists = require('../middlewares/getPostIdValidations/validatePostIdExists');
const {
  findAllPosts, createPost, findPostById, destroyPost, editPostById,
} = require('../controllers/postController');
const validatePost = require('../middlewares/createPostValidations/validatePost');
const validateDeletePost = require('../middlewares/deletePostValidations/validateDeletePost');
const validateEdit = require('../middlewares/editPostValidations/validateEdit');
const validateTitleContent = require('../middlewares/editPostValidations/validateTitleContent');

router
  .route('/')
  .get(validateToken, findAllPosts)
  .post(validateToken, validatePost, createPost);

router
  .route('/:id')
  .get(validateToken, validatePostIdExists, findPostById)
  .put(validateToken, validateTitleContent, validateEdit, editPostById)
  .delete(validateToken, validateDeletePost, destroyPost);

module.exports = router;
