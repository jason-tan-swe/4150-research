// Integration
import { app, startServer } from '../app.js';
import supertest from 'supertest';

let server;

describe('Order Routes', () => {
  beforeAll(async () => {
    server = await startServer();
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should create an order', async () => {
    const response = await supertest(app)
      .post('/orders')
      .send({ id: '100', userId: '1', productId: '101', quantity: 2 });

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      id: '100',
      userId: '1',
      productId: '101',
      quantity: 2,
    });
  });
});
