const { postService } = require('../services');

const addPost = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { userId } = req;
    const post = await postService.addPost(title, content, categoryIds, userId);
    return res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

const listPosts = async (req, res, next) => {
  try {
    const { userId } = req;
    const posts = await postService.listPosts(userId);
    res.status(200).json(posts);
  } catch (error) {
    next();
  }
};

const listPostById = async (req, res, next) => {
  try {
    const { userId } = req;
    const { id } = req.params;
    const post = await postService.listPostById(userId, id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  addPost,
  listPosts,
  listPostById,
};