const router = require("express").Router();
const {addOrder, getOrder} = require("../controllers/orderController")

router.post('/insert', addOrder);
router.get('/find/:id', getOrder);

module.exports = router;