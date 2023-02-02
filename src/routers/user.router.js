const express = require('express');

const router = express.Router();

const { userController } = require('../controllers');
const { validateAddUserMiddleware } = require('../middlewares');

router.post('/', validateAddUserMiddleware, userController.addUser);

module.exports = router;