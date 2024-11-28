import express, { json } from 'express';
import { Order, initDb } from './db/index.js';

const app = express();
app.use(json());

// Initialize database
initDb();

app.get('/health-check', (req, res) => {
  res.send('Order Service is up and running');
})

// Place a new order
app.post('/orders', async (req, res) => {
  const { id, userId, productId, quantity } = req.body;
  try {
    const order = await Order.create({ id, userId, productId, quantity });
    res.status(201).send(order);
  } catch (err) {
    res.status(500).send({ error: 'Error creating order' });
  }
});

// Get order details
app.get('/orders/:id', async (req, res) => {
  const order = await Order.findByPk(req.params.id);
  if (order) {
    res.send(order);
  } else {
    res.status(404).send({ error: 'Order not found' });
  }
});

// List all orders for a user
app.get('/orders/user/:id', async (req, res) => {
  const orders = await Order.findAll({ where: { userId: req.params.id } });
  res.send(orders);
});

app.listen(8082, () => console.log('Order Service running on port 8082'));
