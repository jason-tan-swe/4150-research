import { saveUser, findUserById } from '../repositories/userRepository.js';
import { User } from '../db/index.js';

jest.mock('../db/index.js'); // Mock Sequelize model

describe('User Repository', () => {
  it('should save a user', async () => {
    const mockUser = { id: '1', name: 'John Doe', password: 'pass123' };
    User.create.mockResolvedValue(mockUser);

    const result = await saveUser(mockUser);

    expect(result).toEqual(mockUser);
    expect(User.create).toHaveBeenCalledWith(mockUser);
  });

  it('should find a user by ID', async () => {
    const mockUser = { id: '1', name: 'John Doe', password: 'pass123' };
    User.findByPk.mockResolvedValue(mockUser);

    const result = await findUserById('1');

    expect(result).toEqual(mockUser);
    expect(User.findByPk).toHaveBeenCalledWith('1');
  });
});
