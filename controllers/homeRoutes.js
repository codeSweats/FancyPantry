const router = require('express').Router();
const { Op } = require("sequelize");
const withAuth = require('../utils/auth');
const {User, Inventory, ShoppingList} = require('../models');

router.get('/', withAuth, async (req, res) => { 
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
            include: [{model: Inventory, through: ShoppingList, as: "items"}],
        });
        const user = userData.get({plain: true});
        res.render('shoppinglist', {
            ...user,
            logged_in: true
        });
    }catch (err) {
        res.status(500).json(err);
    }
});

// Displays All Inventory
router.get('/listInventory', async (req, res) => {
    //const currentInventory = await Inventory.findByPk(1);
    const currentInventory = await Inventory.findAll();
    console.log(currentInventory);
    return res.status(200).json({currentInventory});
});

// Search Inventory
router.get('/searchInventory/:item', async (req, res) => {

    const itemToSearch = req.params.item;
    console.log("Buscando->"+itemToSearch);
    const currentInventory = await Inventory.findAll({
        where: {
            item_name:{
                [Op.like]:'%'+itemToSearch+'%'
            }
        }
    });
    
    ;
    console.log(currentInventory);
    return res.status(200).json({currentInventory});
});
    

router.get('/login', async (req, res) => {
    res.render('homepage')
});

router.get('/signup', async (req, res) => {
    res.render('signup')
});


module.exports = router;