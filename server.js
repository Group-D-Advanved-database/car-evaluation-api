// server.js

const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();

// Swagger definition (you can adjust this)
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Car Evaluation API',
      version: '1.0.0',
      description: 'API for Car Evaluation',
    },
  },
  apis: ['./routes/*.js'], // Path to the API route files
};

// Initialize Swagger docs
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Define your routes (example)
app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
  ]);
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
  console.log('Swagger documentation is available at http://localhost:3001/api-docs');
});
