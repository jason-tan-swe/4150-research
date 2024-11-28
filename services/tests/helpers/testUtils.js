import supertest from 'supertest';

const userServiceUrl = 'http://localhost:8080'; // Adjust for Ingress if needed
const productServiceUrl = 'http://localhost:8081';
const orderServiceUrl = 'http://localhost:8082';

export const createUser = async (id, name, password) => {
  const response = await supertest(userServiceUrl)
    .post('/users/register')
    .send({ id, name, password });
  return response.body;
};

export const createProduct = async (id, name, price) => {
  const response = await supertest(productServiceUrl)
    .post('/products') // Create endpoint for adding products if missing
    .send({ id, name, price });
  return response.body;
};

export const placeOrder = async (id, userId, productId, quantity) => {
  console.log("Received: ", id, userId, productId, quantity);
  const response = await supertest(orderServiceUrl)
    .post('/orders')
    .send({ id, userId, productId, quantity });
  return response.body;
};
