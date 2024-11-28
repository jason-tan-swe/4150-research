import { Product } from '../db/index.js';

export const findAllProducts = async () => await Product.findAll();

export const findProductById = async (id) => await Product.findByPk(id);
