import { Sequelize, DataTypes } from 'sequelize';

// Initialize SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../db-data/user-service.db',
});

// Define User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync database schema and populate with sample data
const initDb = async () => {
  await sequelize.sync({ force: true }); // Use `force: false` in production
  console.log('User database synced.');

  // Populate with sample data
  await User.bulkCreate([
    { id: '1', name: 'Alice', password: 'password123' },
    { id: '2', name: 'Bob', password: 'securepass' },
    { id: '3', name: 'Charlie', password: 'qwerty' },
  ]);
  console.log('Sample users added.');
};

export { User, initDb };
