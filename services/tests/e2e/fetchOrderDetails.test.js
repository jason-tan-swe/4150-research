import { createUser, createProduct, placeOrder } from '../helpers/testUtils.js';
import supertest from 'supertest';
import { v4 as uuidv4 } from 'uuid';

const orderServiceUrl = process.env.BASE_URL ?? 'http://localhost:8082';

describe('E2E: Fetch Order Details Workflow', () => {
  it('should fetch the correct order details', async () => {
    // Create a user
    const userId = uuidv4();
    const user = await createUser(userId, 'John Doe', 'securepassword');

    // Place an order
    const orderId = uuidv4()
    const order = await placeOrder(orderId, user.id, '1', 2);

    // Fetch the order details
    const response = await supertest(orderServiceUrl).get(`/orders/${order.id}`);
    const fetchedOrder = response.body;

    expect(response.status).toBe(200);
    expect(fetchedOrder).toMatchObject(order);
  });
});
