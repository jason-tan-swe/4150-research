// Unit
import { createOrder } from '../services/orderService.js';
import { Order } from '../db/index.js'; // Import the Sequelize model

jest.mock('../db/index.js'); // Mock the entire db module

describe('Order Service', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    })

  it('should create an order successfully', async () => {
    const mockOrder = { id: '100', userId: '10', productId: '101', quantity: 2 };

    // Mock the create method of the Order model
    Order.create.mockResolvedValue(mockOrder);

    const result = await createOrder(mockOrder);

    expect(result).toMatchObject(mockOrder);
    expect(Order.create).toHaveBeenCalledWith(mockOrder);
  });

  it('should throw an error if fields are missing', async () => {
    const invalidOrder = { userId: '10', productId: '101' };

    await expect(createOrder(invalidOrder)).rejects.toThrow('Missing required fields');
  });
});
