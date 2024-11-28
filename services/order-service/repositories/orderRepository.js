import { Order } from '../db/index.js';

export const saveOrder = async (data) => await Order.create(data);

export const findOrderById = async (id) => await Order.findByPk(id);

export const findOrdersByUserId = async (userId) =>
  await Order.findAll({ where: { userId } });
