const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/',  withAuth, async (req, res) => { 
    res.render('shoppinglist')
});


router.get('/login', async (req, res) => {
    res.render('homepage')
});


module.exports = router;