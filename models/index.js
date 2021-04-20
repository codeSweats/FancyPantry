const Inventory = require("./Inventory");
const ShoppingList = require("./ShoppingList");
const User = require("./User");

User.hasOne(ShoppingList, {
    foreignKey: 'list_id',
    onDelete: 'CASCADE'
});

ShoppingList.belongsTo(Inventory, {
    foreignKey: "prod_Name"
});

module.exports = { Inventory, ShoppingList, User };

