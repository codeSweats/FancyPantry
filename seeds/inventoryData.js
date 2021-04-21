const { Inventory } = require("../models");

const inventorydata = [
    {
        item_name: "water",
        price: .99,
        stock: 5,
        category: "Grocery",
    },
    {
        item_name: "bread",
        price: 4.50,
        stock: 1,
        category: "Grocery",
    },
    {
        item_name: "eggs",
        price: 4.79,
        stock: 1,
        category: "Grocery",
    },
    {
        item_name: "milk",
        price: 4.67,
        stock: 1,
        category: "Grocery",
    },
    {
        item_name: "bacon",
        price: 3.99,
        stock: 2,
        category: "Grocery",
    },
    {
        item_name: "chicken",
        price: 8.79,
        stock: 2,
        category: "Grocery",
    },
    {
        item_name: "Ajax",
        price: 1.99,
        stock: 2,
        category: "Cleaning",
    },
    {
        item_name: "409",
        price: 3.95,
        stock: 2,
        category: "Cleaning",
    },
    {
        item_name: "Windex",
        price: 3.29,
        stock: 1,
        category: "Cleaning",
    },
    {
        item_name: "Meow Chow",
        price: 8.99,
        stock: 1,
        category: "Pet",
    },
    {
        item_name: "Pedigree Beef Bits",
        price: 15.99,
        stock: 1,
        category: "Pet",
    },
    {
        item_name: "1-ply Toilet Paper",
        price: 8.99,
        stock: 1,
        category: "Toiletries",
    },
    {
        item_name: "Dove",
        price: 5.99,
        stock: 2,
        category: "Toiletries",
    },
    {
        item_name: "Secret Deodorant",
        price: 3.97,
        stock: 2,
        category: "Toiletries",
    },
    {
        item_name: "Colgate",
        price: 3.69,
        stock: 2,
        category: "Toiletries",
    },
];

const seedInventory = () => Inventory.bulkCreate(inventorydata);

module.exports = seedInventory;