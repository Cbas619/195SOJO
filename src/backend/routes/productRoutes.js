const router = require("express").Router();
const {editItem, deleteItem, getAllItems, insertItem, getSpecificItem} = require("../controllers/productController")

router.post('/insert', insertItem);
router.get('/find/:id', getSpecificItem);
router.get('/all', getAllItems);
router.put('/edit/:id', editItem);
router.delete('/delete/:id', deleteItem);

module.exports = router;
