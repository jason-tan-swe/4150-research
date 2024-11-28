import express, { json } from 'express';
import { Product, initDb } from './db/index.js';

const app = express();
app.use(json());

// Initialize database
initDb();

app.get('/health-check', (req, res) => {
  res.send('Product Service is up and running');
})

// List all products
app.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.send(products);
});

// Get product details
app.get('/products/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ error: 'Product not found' });
  }
});

app.listen(8081, () => console.log('Product Service running on port 8081'));
