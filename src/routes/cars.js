'use strict';

const express = require('express');
const router = express.Router();
const { CarsModel } = require('../models');
const validator = require('../middleware/validator');

// Create
router.post('/cars', validator, async (req, res, send) => {
  const newCar = await CarsModel.create(req.body);
  console.log('new car', newCar);
  res.status(200).send(newCar);
});

// Read
router.get('/cars', async (req, res, next) => {
  try {
    let cars = await CarsModel.findAll();
    res.status(200).send(cars);
  } catch (error) {
    next(error);
  }
});

// Read One
router.get('/cars/:id', async (req, res, next) => {
  try {
    let carId = req.params.id;
    let car = await CarsModel.findAll({
      where: {
        id: carId,
      },
    });
    res.status(200).send(car);
  } catch (error) {
    next(error);
  }
});

// Update
router.put('/cars/:id', async (req, res, next) => {
  try {
    let carId = req.params.id;
    let data = req.body;
    let updatedCar = await CarsModel.update(data, {
      where: {
        id: carId,
      },
    });
    res.status(201).send(updatedCar);
  } catch (error) {
    next(error);
  }
});

// Destroy
router.delete('/cars/:id', async (req, res, next) => {
  try {
    let carId = req.params.id;
    await CarsModel.destroy({
      where: {
        id: carId,
      },
    });
    res.status(200).send('Car Deleted');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
// DELETE ME
