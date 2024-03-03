const Order = require('../models/order');

const orderController = {
  // Create a new order
  async createOrder(req, res) {
    try {
      const newOrder = await Order.create(req.body)
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Retrieve an order by ID
  async getOrder(req, res) {
    try {
      const order = await Order.findByPk(req.params.id);
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ message: 'Order not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update an order's details
  async updateOrder(req, res) {
    try {
      await Order.update(req.body, { where: { id: req.params.id } });
      const updatedOrder = await Order.findByPk(req.params.id);
      if (updatedOrder) {
        res.status(200).json(updatedOrder);
      } else {
        res.status(404).json({ message: 'Order not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Cancel an order
  async cancelOrder(req, res) {
    try {
      const deletedCount = await Order.destroy({ where: { id: req.params.id } });
      if (cancelledCount) {
        res.status(200).json({ message: 'Order cancelled' });
      } else {
        res.status(404).json({ message: 'Order not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = orderController;
