import { Sequelize, DataTypes } from 'sequelize';

const isTest = process.env.NODE_ENV === 'test';
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: isTest ? ':memory:' : '../db-data/order-service.db',
  logging: isTest ? false : true,
});

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const initDb = async () => {
  await sequelize.sync({ force: true });
  console.log('Order database synced.');

  // Populate with sample data
  await Order.bulkCreate([
    { id: '1', userId: '1', productId: '1', quantity: 1 },
    { id: '2', userId: '2', productId: '2', quantity: 2 },
    { id: '3', userId: '3', productId: '3', quantity: 3 },
  ]);
  console.log('Sample orders added.');
};

export { Order, initDb };
