const router = require("express").Router();
const {addOrder, getOrder, getAllOrders, putOrder, getByItemOrder} = require("../controllers/orderController")

router.post('/insert', addOrder);
router.get('/find/:buyerId', getOrder);
router.get('/findbyproduct/:productId', getByItemOrder);
router.get('/all', getAllOrders);
router.put('/put/:id', putOrder);

module.exports = router;