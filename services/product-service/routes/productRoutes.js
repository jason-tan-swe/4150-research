import express from 'express';
import { listAllProducts, getProductDetails } from '../services/productService.js';

const router = express.Router();

// List all products
router.get('/', async (req, res) => {
  try {
    const products = await listAllProducts();
    res.send(products);
  } catch (err) {
    res.status(500).send({ error: 'Error fetching products' });
  }
});

// Get product details
router.get('/:id', async (req, res) => {
  try {
    const product = await getProductDetails(req.params.id);
    res.send(product);
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
});

export default router;
