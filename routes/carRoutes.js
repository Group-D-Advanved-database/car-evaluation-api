const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Get all cars
router.get('/', carController.getAllCars);

// Get a specific car by ID
router.get('/:id', carController.getCarById);

// Add a new car
router.post('/', carController.addCar);

// Update an existing car
router.put('/:id', carController.updateCar);

// Delete a car
router.delete('/:id', carController.deleteCar);

module.exports = router;
