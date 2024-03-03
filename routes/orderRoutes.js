const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to create a new order
router.post('/', orderController.createOrder);

// Route to retrieve an order by ID
router.get('/:id', orderController.getOrder);

// Route to update an order
router.put('/:id', orderController.updateOrder);

// Route to cancel an order
router.delete('/:id', orderController.cancelOrder);

module.exports = router;
