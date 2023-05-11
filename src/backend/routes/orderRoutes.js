const router = require("express").Router();
const {addOrder, getOrder, getAllOrders, putOrder} = require("../controllers/orderController")

router.post('/insert', addOrder);
router.get('/find/:buyerId', getOrder);
router.get('/all', getAllOrders);
router.put('/put/:id', putOrder);

module.exports = router;