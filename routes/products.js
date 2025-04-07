// routes/products.js

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
app.get('/products', (req, res) => {
    res.json([
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ]);
  });
  