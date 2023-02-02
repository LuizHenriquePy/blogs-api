const express = require('express');

const app = express();

const { loginRouter, userRouter } = require('./routers');

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);

module.exports = app;
