import express, { json } from 'express';
import { initDb } from './db/index.js';
import productRoutes from './routes/productRoutes.js';

const app = express();
app.use(json());
app.use('/products', productRoutes);

// Health check endpoint
app.get('/health-check', (req, res) => {
  res.send('Product Service is up and running');
});

const startServer = async () => {
  try {
    // Initialize database
    await initDb();

    // Start the server
    const server = app.listen(8081, () => {
      console.log('Product Service running on port 8081')
    });

    return server;
  } catch (error) {
    console.error('Failed to initialize database', error);
    process.exit(1);
  }
};

export { app, startServer };