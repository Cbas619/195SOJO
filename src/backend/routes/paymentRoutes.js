const router = require("express").Router();
const {addPayment, getPayment, editPayment, deletePayment} = require("../controllers/paymentController")

router.post('/insert', addPayment);
router.get('/find/:id', getPayment);
router.put('/edit/:id', editPayment);
router.delete('/delete/:id', deletePayment);

module.exports = router;