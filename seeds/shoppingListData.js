
const { ShoppingList } = require("../models");

const shoppingdata = [
    {
        item_name: "bread",
        price: 4.50,
        qty: 1,
        category: "Grocery",
    },
    {
        item_name: "eggs",
        price: 4.79,
        qty: 1,
        category: "Grocery",
    },
    {
        item_name: "milk",
        price: 4.67,
        qty: 1,
        category: "Grocery",
    },
    {
        item_name: "409",
        price: 3.95,
        qty: 2,
        category: "Cleaning",
    },
    {
        item_name: "Meow Chow",
        price: 8.99,
        qty: 1,
        category: "Pet",
    },
    {
        item_name: "1-ply Toilet Paper",
        price: 8.99,
        qty: 1,
        category: "Toiletries",
    },
    {
        item_name: "Secret Deodorant",
        price: 3.97,
        qty: 2,
        category: "Toiletries",
    },
];

const seedShoppingList = () => ShoppingList.bulkCreate(shoppingdata);

module.exports = seedShoppingList;