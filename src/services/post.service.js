const Sequelize = require('sequelize');
const { Category, BlogPost, PostCategory, User } = require('../models');
const { ErrorGenerator, types } = require('../utils/errorSettings');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const addPost = async (title, content, categoryIds, userId) => {
  const validateCategories = await Promise.all(categoryIds
    .map((id) => Category.findOne({ where: { id } })));
  if (validateCategories.includes(null)) {
    throw new ErrorGenerator(types.BAD_REQUEST, 'one or more "categoryIds" not found');
  }
  const dateNow = new Date();
  const t = await sequelize.transaction();
  try {
    const post = await BlogPost.create({
      userId, title, content, published: dateNow, updated: dateNow,
    },
      { transaction: t });
    await Promise.all(categoryIds.map((id) => PostCategory
      .create({ postId: post.dataValues.id, categoryId: id }, { transaction: t })));
    await t.commit();
    return post;
  } catch (error) {
    await t.rollback();
    throw new Error(error.message);
  }
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
  const post = await BlogPost.findOne({ where: { id } });
  if (!post) throw new ErrorGenerator(types.NOT_FOUND, 'Post does not exist');
  await BlogPost.destroy({ where: { userId, id } });
  if (post.dataValues.userId !== userId) {
    throw new ErrorGenerator(types.UNAUTHENTICATED, 'Unauthorized user');
  }
};

module.exports = {
  addPost,
  listPosts,
  listPostById,
  updatePost,
  deletePost,
};