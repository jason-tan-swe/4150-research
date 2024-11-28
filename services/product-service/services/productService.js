import { findAllProducts, findProductById } from '../repositories/productRepository.js';

export const listAllProducts = async () => {
  return await findAllProducts();
};

export const getProductDetails = async (id) => {
  const product = await findProductById(id);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};
