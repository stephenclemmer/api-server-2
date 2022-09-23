'use strict';

require('dotenv').config();
const express = require('express');

const notFound = require('./error-handlers/404');
const errorHandler = require ('./error-handlers/500');
const logger = require('../src/middleware/logger');

const carsRouter = require('./routes/cars');
const guitarsRouter = require('./routes/guitars');
const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(carsRouter);
app.use(guitarsRouter);
app.use(logger);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.get('/bad', (req, res, next) => {
  next('this is a bad route');
});

app.use('*', notFound);

app.use(errorHandler);

function start (){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start };
