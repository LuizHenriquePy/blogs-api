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
router.get(
  '/',
  validateTokenMiddleware,
  postController.listPosts,
);
router.get(
  '/:id',
  validateTokenMiddleware,
  postController.listPostById,
);

module.exports = router;