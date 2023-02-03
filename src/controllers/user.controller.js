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

const getUsers = async (_req, res, next) => {
  try {
    const users = await userService.getUsers();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addUser,
  getUsers,
};