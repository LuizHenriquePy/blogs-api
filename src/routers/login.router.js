const express = require('express');

const router = express.Router();

const { loginController } = require('../controllers');
const { validateLoginMiddleware } = require('../middlewares');

router.post('/', validateLoginMiddleware, loginController.login);

module.exports = router;