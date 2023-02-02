const { userService } = require('../services');

const addUser = async (req, res, next) => {
  try {
    const { displayName, password, email, image } = req.body;
    const token = await userService.addUser(displayName, password, email, image);
    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addUser,
};