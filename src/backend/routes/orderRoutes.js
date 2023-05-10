const router = require("express").Router();
const {addOrder, getOrder, getAllOrders} = require("../controllers/orderController")

router.post('/insert', addOrder);
router.get('/find/:id', getOrder);
router.get('/all', getAllOrders);

module.exports = router;