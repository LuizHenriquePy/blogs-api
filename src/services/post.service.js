const { Category, BlogPost, PostCategory } = require('../models');
const { ErrorGenerator, types } = require('../utils/errorSettings');

const addPost = async (title, content, categoryIds, userId) => {
  categoryIds.forEach(async (id) => {
    const category = await Category.findOne({ where: { id } });
    if (!category) {
      throw new ErrorGenerator(types.BAD_REQUEST, 'one or more "categoryIds" not found');
    }
  });
  const dateNow = new Date();
  const post = await BlogPost.create({
    userId, title, content, published: dateNow, updated: dateNow,
  });
  categoryIds.forEach(async (id) => {
    await PostCategory.create({ postId: post.dataValues.id, categoryId: id });
  });
  return post;
};

module.exports = {
  addPost,
};