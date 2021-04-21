const router = require('express').Router();
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


router.get('/login', async (req, res) => {
    res.render('homepage')
});

router.get('/signup', async (req, res) => {
    res.render('signup')
});


module.exports = router;