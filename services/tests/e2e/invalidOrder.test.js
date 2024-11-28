import supertest from 'supertest';

const orderServiceUrl = 'http://localhost:8082';

describe('E2E: Invalid Order Scenarios', () => {
  it('should return 404 for an invalid user ID', async () => {
    const response = await supertest(orderServiceUrl)
      .post('/orders')
      .send({ id: '201', productId: '101', quantity: 2 });

    expect(response.status).toBe(500);
    expect(response.body.error).toBeDefined()
  });

  it('should return 404 for an invalid product ID', async () => {
    const response = await supertest(orderServiceUrl)
      .post('/orders')
      .send({ id: '202', userId: '1', productId: 'invalid', quantity: 2 });

    expect(response.status).toBe(500);
    expect(response.body.error).toBeDefined()
  });
});
