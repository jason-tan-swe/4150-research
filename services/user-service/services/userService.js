import { findUserById, saveUser } from '../repositories/userRepository.js';

export const registerUser = async (data) => {
  const { id, name, password } = data;
  if (!id || !name || !password) {
    throw new Error('Missing required fields');
  }
  return await saveUser({ id, name, password });
};

export const authenticateUser = async (id, password) => {
  const user = await findUserById(id);
  if (!user || user.password !== password) {
    throw new Error('Invalid credentials');
  }
  return { token: 'fake-jwt-token', user };
};

export const getUserProfile = async (id) => {
  const user = await findUserById(id);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};
