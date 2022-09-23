'use strict';

require('dotenv').config();

const { sequelizeDatabase } = require('./src/models');
const { start } = require('./src/server.js');

sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection!');
    start();
  })
  .catch(err => console.error(err));
