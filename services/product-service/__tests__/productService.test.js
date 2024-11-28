import { listAllProducts, getProductDetails } from '../services/productService.js';
import { Product } from '../db/index.js';
jest.mock('../db/index.js'); // Mock the entire db module

describe('Product Service', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  })

  it('should list all products', async () => {
    const mockProducts = [
      { id: '1', name: 'Product A', price: 100 },
      { id: '2', name: 'Product B', price: 200 },
    ];
    const mockRepo = { findAllProducts: jest.fn().mockResolvedValue(mockProducts) };

    Product.findAll.mockResolvedValue(mockProducts);
    const result = await listAllProducts();

    expect(result).toEqual(mockProducts);
  });

  it('should get product details', async () => {
    const mockProduct = { id: '1', name: 'Product A', price: 100 };
    const mockRepo = { findProductById: jest.fn().mockResolvedValue(mockProduct) };

    Product.findByPk.mockResolvedValue(mockProduct);
    const result = await getProductDetails('1');

    expect(result).toEqual(mockProduct);
  });

  it('should throw an error if product is not found', async () => {
    const mockRepo = { findProductById: jest.fn().mockResolvedValue(null) };
    await expect(getProductDetails('99')).rejects.toThrow('Product not found');
  });
});
