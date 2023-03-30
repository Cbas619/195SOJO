const router = require("express").Router();
const {addAddress, getAddress} = require("../controllers/addressController")

router.post('/insert', addAddress);
router.get('/find/:id', getAddress);

module.exports = router;