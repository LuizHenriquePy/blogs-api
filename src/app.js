const express = require('express');

const app = express();

const { loginRouter } = require('./routers');

app.use(express.json());

app.use('/login', loginRouter);

module.exports = app;
