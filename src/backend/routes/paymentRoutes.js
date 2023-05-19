const router = require("express").Router();
const {addPayment, getPayment, editPayment, deletePayment, getByItemOrder} = require("../controllers/paymentController")

router.post('/insert', addPayment);
router.get('/find/:id', getPayment);
router.put('/edit/:id', editPayment);
router.delete('/delete/:id', deletePayment);
router.get('/findbyproduct/:productId', getByItemOrder);

module.exports = router;