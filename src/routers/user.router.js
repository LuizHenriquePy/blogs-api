const express = require('express');

const router = express.Router();

const { userController } = require('../controllers');
const { validateAddUserMiddleware, validateTokenMiddleware } = require('../middlewares');

router.post('/', validateAddUserMiddleware, userController.addUser);
router.get('/', validateTokenMiddleware, userController.getUsers);

module.exports = router;