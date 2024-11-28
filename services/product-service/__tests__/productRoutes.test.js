import supertest from 'supertest';
import { app, startServer } from '../app.js';

let server;

describe('Product Routes', () => {
  beforeAll(async () => {
      server = await startServer();
  });
  
  afterAll((done) => {
      server.close(done);
  });

  it('should list all products', async () => {
    const response = await supertest(app).get('/products');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should fetch product details', async () => {
    const response = await supertest(app).get('/products/1');

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: expect.any(String),
      name: expect.any(String),
      price: expect.any(Number),
    });
  });

  it('should return 404 for an unknown product', async () => {
    const response = await supertest(app).get('/products/999');

    expect(response.status).toBe(404);
  });
});
