import express from 'express';
import { createOrder, getOrderById, listOrdersForUser } from '../services/orderService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const order = await createOrder(req.body);
    res.status(201).send(order);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const order = await getOrderById(req.params.id);
    res.send(order);
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
});

router.get('/user/:id', async (req, res) => {
  const orders = await listOrdersForUser(req.params.id);
  res.send(orders);
});

export default router;
