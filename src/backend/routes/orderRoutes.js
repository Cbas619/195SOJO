const router = require("express").Router();
const {addOrder, getOrder, getAllOrders} = require("../controllers/orderController")

router.post('/insert', addOrder);
router.get('/find/:id', getOrder);
router.get('/all', getAllOrders);
router.put('/put/:id', putOrder);

module.exports = router;