import express, { json } from 'express';
import { User, initDb } from './db/index.js';

const app = express();
app.use(json());

// Initialize database
initDb();

app.get('/health-check', (req, res) => {
  res.send('User Service is up and running');
})

// Register a new user
app.post('/users/register', async (req, res) => {
  const { id, name, password } = req.body;
  try {
    const user = await User.create({ id, name, password });
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send({ error: 'Error creating user' });
  }
});

// Authenticate user
app.post('/users/login', async (req, res) => {
  const { id, password } = req.body;
  const user = await User.findByPk(id);
  if (user && user.password === password) {
    res.send({ token: 'fake-jwt-token', user });
  } else {
    res.status(401).send({ error: 'Invalid credentials' });
  }
});

// Fetch user profile
app.get('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ error: 'User not found' });
  }
});

app.listen(8080, () => console.log('User Service running on port 8080'));
