const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to create a new product
router.post('/', userController.createUser);

// Route to retrieve a product by ID
router.get('/:id', userController.getUser);

// Route to update a product
router.put('/:id', userController.updateUser);

// Route to delete a product
router.delete('/:id', userController.deleteUser);

module.exports = router;
