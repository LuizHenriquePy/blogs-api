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
router.get(
  '/',
  validateTokenMiddleware,
  categoriesController.getCategories,
);

module.exports = router;