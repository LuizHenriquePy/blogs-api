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

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getUser(id);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { userId } = req;
    await userService.deleteUser(userId);
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addUser,
  getUsers,
  getUser,
  deleteUser,
};