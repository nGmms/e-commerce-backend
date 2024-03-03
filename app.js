const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');


const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use('/orders', orderRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);

// Handle 404 Not Found
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('Internal Server Error');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
