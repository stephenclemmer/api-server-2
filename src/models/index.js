'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const peopleSchema = require('./people.js');
const guitarsSchema = require('./guitars.js');

const CollectionClass = require('./collection-class');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

//   Uncomment for production; Comment out for Development
// const sequelizeDatabase = new Sequelize(DATABASE_URL, {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });

// Uncomment for Development; Comment Out for Production
const sequelizeDatabase = new Sequelize(DATABASE_URL);

const PeopleModel = peopleSchema(sequelizeDatabase, DataTypes);
const GuitarsModel = guitarsSchema(sequelizeDatabase, DataTypes);

PeopleModel.hasMany(GuitarsModel);
GuitarsModel.belongsTo(PeopleModel);

module.exports = {
  sequelizeDatabase,
  peopleInterface: new CollectionClass(PeopleModel),
  guitarsInterface: new CollectionClass(GuitarsModel),
};
