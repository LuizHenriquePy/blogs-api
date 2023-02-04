const express = require('express');

const router = express.Router();

const {
  validateTokenMiddleware,
  validateAddCategoryMiddleware,
} = require('../middlewares');
const { categoriesController } = require('../controllers');

router.post(
  '/',
  validateTokenMiddleware,
  validateAddCategoryMiddleware,
  categoriesController.addCategory,
);

module.exports = router;