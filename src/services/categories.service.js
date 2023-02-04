const { Category } = require('../models');

const addCategory = async (name) => {
  const category = await Category.create({ name });
  return category;
};

const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  addCategory,
  getCategories,
};