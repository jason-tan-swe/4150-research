import express, { json } from 'express';
import { initDb } from './db/index.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(json());
app.use('/users', userRoutes);

// Health check endpoint
app.get('/health-check', (req, res) => {
  res.send('User Service is up and running');
});

const startServer = async () => {
  try {
    // Initialize database
    await initDb();

    // Start the server
    const server = app.listen(8080, () => {
      console.log('User Service running on port 8080')
    });

    return server;
  } catch (error) {
    console.error('Failed to initialize database', error);
    process.exit(1);
  }
};

export { app, startServer };