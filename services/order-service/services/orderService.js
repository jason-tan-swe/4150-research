import { Order } from '../db/index.js';

export const createOrder = async (data) => {
  const { id, userId, productId, quantity } = data;
  if (!id || !userId || !productId || !quantity) {
    throw new Error('Missing required fields');
  }
  return await Order.create({ id, userId, productId, quantity });
};

export const getOrderById = async (id) => {
  const order = await Order.findByPk(id);
  if (!order) {
    throw new Error('Order not found');
  }
  return order;
};

export const listOrdersForUser = async (userId) => {
  return await Order.findAll({ where: { userId } });
};
