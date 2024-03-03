const Product = require('../models/product');

const productController = {
  // Create a new product
  async createProduct(req, res) {
    try {
      const newProduct = await Product.create(req.body)
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Retrieve a product by ID
  async getProduct(req, res) {
    try {
      const product = await Product.findByPk(req.params.id)
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update a product
  async updateProduct(req, res) {
    try {
      await Product.update(req.body, { where: { id: req.params.id } });
      const updatedProduct = await Product.findByPk(req.params.id);
      if (updatedProduct) {
        res.status(200).json(updatedProduct);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete a product
  async deleteProduct(req, res) {
    try {
      const deletedCount = await Product.destroy({ where: { id: req.params.id } });
      if (deletedCount) {
        res.status(200).json({ message: 'Product deleted' });
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = productController;
