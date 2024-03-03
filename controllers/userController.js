const User = require('../models/user');
const bcrypt = require('bcrypt');

const userController = {
  // Create a new user
  async createUser(req, res) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = await User.create({ ...req.body, password: hashedPassword });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Retrieve a user by ID
  async getUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update a user's details
  async updateUser(req, res) {
    try {
      await User.update(updateData, { where: { id: userId } });
      const updatedUser = await User.findByPk(userId);
      if (updatedUser) {
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete a user
  async deleteUser(req, res) {
    try {
      const deletedCount = await User.destroy({ where: { id: userId } });
      if (deletedCount) {
        res.status(200).json({ message: 'User deleted' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = userController;
