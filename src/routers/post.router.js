const express = require('express');

const router = express.Router();

const {
  validateTokenMiddleware,
  validateUpdatePostMiddleware } = require('../middlewares');
const { postController } = require('../controllers');

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
router.put(
  '/:id',
  validateTokenMiddleware,
  validateUpdatePostMiddleware,
  postController.updatePost,
);
router.delete(
  '/:id',
  validateTokenMiddleware,
  postController.deletePost,
);

module.exports = router;