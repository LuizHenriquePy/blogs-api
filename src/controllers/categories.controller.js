const { categoriesService } = require('../services');

const addCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const category = await categoriesService.addCategory(name);
    return res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const categories = await categoriesService.getCategories();
    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addCategory,
  getCategories,
};