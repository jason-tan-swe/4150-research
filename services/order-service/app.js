import express, { json } from 'express';
import { initDb } from './db/index.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();
app.use(json());
app.use('/orders', orderRoutes);

// Health check route
app.get('/health-check', (req, res) => {
  res.send('Order Service is up and running');
});

const startServer = async () => {
  try {
    // Initialize database
    await initDb();

    // Start the server
    const server = app.listen(8082, () => {
      console.log('Order Service running on port 8082');
    });
    return server;

  } catch (error) {
    console.error('Failed to initialize database', error);
    process.exit(1);
  }
};

export { app, startServer };