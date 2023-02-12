const express = require('express');

const router = express.Router();

const { validateTokenMiddleware, validateAddPostMiddleware } = require('../middlewares');
const { postController } = require('../controllers');

router.post(
  '/',
  validateTokenMiddleware,
  validateAddPostMiddleware,
  postController.addPost,
);

module.exports = router;