'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const carsSchema = require('./cars.js');
const guitarsSchema = require('./guitars.js');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const CarsModel = carsSchema(sequelizeDatabase, DataTypes);
const GuitarsModel = guitarsSchema(sequelizeDatabase, DataTypes);

module.exports = {sequelizeDatabase, CarsModel, GuitarsModel};
