const router = require("express").Router();
const {addAddress, getAddress, editAddress, deleteAddress} = require("../controllers/addressController")

router.post('/insert', addAddress);
router.get('/find/:id', getAddress);
router.put('/edit/:id', editAddress);
router.delete('/delete/:id', deleteAddress);

module.exports = router;