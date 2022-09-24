'use strict';

const serverError = require('../error-handlers/500');

const validator = (req, res, next) => {
  //   if req.originalUrl === '/get' ||
  let { name } = req.body;
  //   try {
  if (name) {
    next();

  } else {
    //     //   serverError();
    //   } catch (error) {
    next('name required');
  }
};

module.exports = validator;
