const router = require('express').Router();
const { ShoppingList } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', async (req, res) => {
    try {
        const addItem = await ShoppingList.create({
            ...req.body,
            user_id: req.session.user_id,
            item_name: req.body.item_name,
            item_id: req.body.item_id,
            inventory_id: req.body.item_id,
        });
        res.status(200).json(addItem);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const items = await ShoppingList.findAll({where: {user_id: req.params.id} 

        });
        res.status(200).json(items);

    }catch (err) {
        res.status(500).json(err);
    }
})
//export
module.exports = router;