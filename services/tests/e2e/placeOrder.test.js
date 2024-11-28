import { createUser, placeOrder } from '../helpers/testUtils.js';
import { v4 as uuidv4 } from 'uuid';

describe('E2E: Place Order Workflow', () => {
  it.only('should place an order successfully', async () => {
    // Create a user
    const userId = uuidv4();
    console.log("Id = ", userId)
    const user = await createUser(userId, 'John Doe', 'securepassword');
    console.log("User = ", user)

    // Place an order
    const orderId = uuidv4()
    const order = await placeOrder(orderId, user.id, '1', 2);

    expect(order).toMatchObject({
      id: orderId,
      userId: user.id,
      productId: '1',
      quantity: 2,
    });
  });
});
