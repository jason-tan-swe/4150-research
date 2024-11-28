import { Sequelize, DataTypes } from 'sequelize';

const isTest = process.env.NODE_ENV === 'test';
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: isTest ? ':memory:' : '../db-data/product-service.db',
  logging: isTest ? false : true,
});

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

const initDb = async () => {
  await sequelize.sync({ force: true });
  console.log('Product database synced.');

  // Populate with sample data
  await Product.bulkCreate([
    { id: '1', name: 'Laptop', price: 999.99 },
    { id: '2', name: 'Smartphone', price: 499.99 },
    { id: '3', name: 'Headphones', price: 99.99 },
  ]);
  console.log('Sample products added.');
};

export { Product, initDb };
