'use strict';

const express = require('express');
const router = express.Router();
const { peopleInterface } = require('../models');
const validator = require('../middleware/validator');

// Create
router.post('/people', validator, async (req, res, send) => {
  const newPerson = await peopleInterface.create(req.body);
  console.log('new person', newPerson);
  res.status(200).send(newPerson);
});

// Read
router.get('/people', async (req, res, next) => {
  try {
    let person = await peopleInterface.read();
    res.status(200).send(person);
  } catch (error) {
    next(error);
  }
});

// Read One
router.get('/people/:id', async (req, res, next) => {
  try {
    let personId = req.params.id;
    let person = await peopleInterface.read(personId);
    res.status(200).send(person);
  } catch (error) {
    next(error);
  }
});

// Update
router.put('/people/:id', async (req, res, next) => {
  try {
    let personId = req.params.id;
    let data = req.body;
    let updatedPerson = await peopleInterface.update(data, personId);
    res.status(201).send(updatedPerson);
  } catch (error) {
    next(error);
  }
});

// Destroy
router.delete('/people/:id', async (req, res, next) => {
  try {
    let personId = req.params.id;
    await peopleInterface.delete(personId);
    res.status(200).send('Person Deleted');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
