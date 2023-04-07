


const router = require("express").Router();
const {editItem, deleteItem, getAllItems, insertItem, getSpecificItem, searchItem, getCategories} = require("../controllers/productController")

router.post('/insert', insertItem);
router.get('/find/:id', getSpecificItem);
router.get('/all', getAllItems);
router.put('/edit/:id', editItem);
router.delete('/delete/:id', deleteItem);
router.get('/search', searchItem);
router.get('/categories', getCategories);


module.exports = router;