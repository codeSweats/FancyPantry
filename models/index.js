const Inventory = require("./Inventory");
const ShoppingList = require("./ShoppingList");
const User = require("./User");

Inventory.belongsToMany(User, {
    through: { model: ShoppingList, unique: false },
    as: "lists"
});

User.belongsToMany(Inventory, {
    through: { model: ShoppingList, unique: false },
    as: "items"
});

module.exports = { Inventory, ShoppingList, User };

