
const ShoppingList = require("./ShoppingList");


// Displays shopping List
app.get('/api/listShoppingList', (req, res) => {
    
const currentList = await ShoppingList.findAll();
console.log (currentList);


});
// Displays department List
app.get('/api/departmentList', (req, res) => res.json(departmentList));
// Displays item shopping List
app.get('/api/addItemShoppingList', (req, res) => res.json(addItemShoppingList));
// Displays item shopping List
app.get('/api/addItemShoppingList', (req, res) => res.json(addItemShoppingList));