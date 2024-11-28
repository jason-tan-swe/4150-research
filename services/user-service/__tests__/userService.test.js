import { registerUser, authenticateUser, getUserProfile } from '../services/userService.js';
import { User } from '../db/index.js';
jest.mock('../db/index.js'); // Mock the entire db module

describe('User Service', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    })

  it('should register a user successfully', async () => {
    const mockUser = { id: '1', name: 'John Doe', password: 'pass123' };
    const mockRepo = { saveUser: jest.fn().mockResolvedValue(mockUser) };

    User.create.mockResolvedValue(mockUser);

    const result = await registerUser(mockUser);

    expect(result).toMatchObject(mockUser);
  });

  it('should authenticate a user with correct credentials', async () => {
    const mockUser = { id: '1', name: 'John Doe', password: 'pass123' };
    const mockRepo = { findUserById: jest.fn().mockResolvedValue(mockUser) };

    User.findByPk.mockResolvedValue(mockUser);

    const result = await authenticateUser('1', 'pass123');

    expect(result).toMatchObject({
      token: 'fake-jwt-token',
      user: mockUser,
    });
  });

  it('should throw an error if user credentials are invalid', async () => {
    const mockRepo = { findUserById: jest.fn().mockResolvedValue(null) };

    await expect(authenticateUser('1', 'wrongpass')).rejects.toThrow('Invalid credentials');
  });
});
