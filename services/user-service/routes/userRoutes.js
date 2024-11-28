import express from 'express';
import { registerUser, authenticateUser, getUserProfile } from '../services/userService.js';

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Authenticate user
router.post('/login', async (req, res) => {
  const { id, password } = req.body;
  try {
    const result = await authenticateUser(id, password);
    res.send(result);
  } catch (err) {
    res.status(401).send({ error: err.message });
  }
});

// Fetch user profile
router.get('/:id', async (req, res) => {
  try {
    const user = await getUserProfile(req.params.id);
    res.send(user);
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
});

export default router;
