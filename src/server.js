require('dotenv').config();
const app = require('./app');
const { errorHandlerMiddleware } = require('./middlewares');

const port = process.env.API_PORT || 3000;

app.get('/', (_request, response) => {
  response.send();
});

app.use(errorHandlerMiddleware);

app.listen(port, () => console.log('ouvindo porta', port));
