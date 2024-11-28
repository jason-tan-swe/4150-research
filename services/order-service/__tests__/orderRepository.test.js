// Unit
import { saveOrder, findOrderById } from '../repositories/orderRepository.js';
import { Order } from '../db/index.js';

jest.mock('../db/index.js'); // Mock Sequelize model

describe('Order Repository', () => {
  it('should save an order', async () => {
    const mockOrder = { id: '100', userId: '10', productId: '101', quantity: 2 };
    Order.create.mockResolvedValue(mockOrder);

    const result = await saveOrder(mockOrder);

    expect(result).toEqual(mockOrder);
    expect(Order.create).toHaveBeenCalledWith(mockOrder);
  });

  it('should find an order by ID', async () => {
    const mockOrder = { id: '100', userId: '10', productId: '101', quantity: 2 };
    Order.findByPk.mockResolvedValue(mockOrder);

    const result = await findOrderById('1');

    expect(result).toEqual(mockOrder);
    expect(Order.findByPk).toHaveBeenCalledWith('1');
  });
});
