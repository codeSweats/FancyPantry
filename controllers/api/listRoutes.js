const router = require('express').Router();
const {ShoppingList} = require('../../models');

//Do I eed authentication? 

router.post('/', async (req, res) => {
    try{
        const addItem = await ShoppingList.create({
            ...req.body,
            item_name: req.session.item_name,
            //user from req.ses.user_id
        });
        res.status(200).json(addItem);
    } catch (err) {
        res.status(400).json(err);
    }
});