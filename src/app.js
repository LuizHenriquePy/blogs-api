const express = require('express');

const app = express();

const { loginRouter, userRouter, categoriesRouter, postRouter } = require('./routers');

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

module.exports = app;
