'use strict';

const express = require('express');
const router = express.Router();
const { guitarsInterface } = require('../models');
const validator = require('../middleware/validator');

// Create
router.post('/guitars', validator, async (req, res, send) => {
  const newGuitar = await guitarsInterface.create(req.body);
  console.log('new guitar', newGuitar);
  res.status(200).send(newGuitar);
});

// Read
router.get('/guitars', async (req, res, next) => {
  try {
    let guitars = await guitarsInterface.read();
    res.status(200).send(guitars);
  } catch (error) {
    next(error);
  }
});

// Read One
router.get('/guitars/:id', async (req, res, next) => {
  try {
    let guitarId = req.params.id;
    let guitar = await guitarsInterface.read(guitarId);
    res.status(200).send(guitar);
  } catch (error) {
    next(error);
  }
});

// Update
router.put('/guitars/:id', async (req, res, next) => {
  try {
    let guitarId = req.params.id;
    let data = req.body;
    let updatedGuitar = await guitarsInterface.update(data, guitarId);
    res.status(201).send(updatedGuitar);
  } catch (error) {
    next(error);
  }
});

// Destroy
router.delete('/guitars/:id', async (req, res, next) => {
  try {
    let guitarId = req.params.id;
    await guitarsInterface.delete(guitarId);
    res.status(200).send('Guitar Deleted');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
