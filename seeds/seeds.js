const sequelize = require('../config/connection');
const { User } = require('../models');

const seedShoppingList = require('./shoppingListData');
const seedInventory = require('./inventoryData');
const userData = [];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await seedInventory();

  await seedShoppingList();

  process.exit(0);
};

seedDatabase();
