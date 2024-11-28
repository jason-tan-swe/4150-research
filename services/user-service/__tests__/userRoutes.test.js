// Integration

import supertest from 'supertest';
import { app, startServer } from '../app.js';

let server;

describe('User Routes', () => {
    beforeAll(async () => {
      server = await startServer();
    });

    afterAll((done) => {
      server.close(done);
    });
    
  it('should register a user', async () => {
    const response = await supertest(app)
      .post('/users/register')
      .send({ id: '100', name: 'John Doe', password: 'pass123' });

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      id: '100',
      name: 'John Doe',
    });
  });

  it('should return 401 for invalid login', async () => {
    const response = await supertest(app)
      .post('/users/login')
      .send({ id: '1', password: 'wrongpass' });

    expect(response.status).toBe(401);
  });

  it('should fetch user profile', async () => {
    const response = await supertest(app).get('/users/100');

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: '100',
      name: 'John Doe',
    });
  });
});
