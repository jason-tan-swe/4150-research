import { findAllProducts, findProductById } from '../repositories/productRepository.js';
import { Product } from '../db/index.js';

jest.mock('../db/index.js'); // Mock Sequelize model

describe('Product Repository', () => {
  it('should find all products', async () => {
    const mockProducts = [
      { id: '1', name: 'Product A', price: 100 },
      { id: '2', name: 'Product B', price: 200 },
    ];
    Product.findAll.mockResolvedValue(mockProducts);

    const result = await findAllProducts();

    expect(result).toEqual(mockProducts);
    expect(Product.findAll).toHaveBeenCalled();
  });

  it('should find a product by ID', async () => {
    const mockProduct = { id: '1', name: 'Product A', price: 100 };
    Product.findByPk.mockResolvedValue(mockProduct);

    const result = await findProductById('1');

    expect(result).toEqual(mockProduct);
    expect(Product.findByPk).toHaveBeenCalledWith('1');
  });
});
