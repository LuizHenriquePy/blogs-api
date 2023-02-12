const { postService } = require('../services');

const addPost = async (req, res, next) => {
  try {
    const { title, content, categoryIds, userId } = req.body;
    const post = await postService.addPost(title, content, categoryIds, userId);
    return res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addPost,
};