const { Category, BlogPost, PostCategory, User } = require('../models');
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

const listPosts = async (userId) => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    where: { userId },
  });
  return posts;
};

const listPostById = async (userId, id) => {
  const post = await BlogPost.findOne({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    where: { userId, id },
  });
  if (!post) throw new ErrorGenerator(types.NOT_FOUND, 'Post does not exist');
  return post;
};

const updatePost = async (userId, id, title, content) => {
  const [postId] = await BlogPost.update({ title, content }, { where: { userId, id } });
  if (postId === 0) throw new ErrorGenerator(types.UNAUTHENTICATED, 'Unauthorized user');
  const post = await listPostById(userId, postId);
  return post;
};

const deletePost = async (userId, id) => {
  await listPostById(userId, id);
  const result = await BlogPost.destroy({ where: { userId, id } });
  if (result === 0) throw new ErrorGenerator(types.UNAUTHENTICATED, 'Unauthorized user');
};

module.exports = {
  addPost,
  listPosts,
  listPostById,
  updatePost,
  deletePost,
};