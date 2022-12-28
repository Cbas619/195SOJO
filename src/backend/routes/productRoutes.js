const router = require("express").Router();
const Product = require("../models/Product");

router.get('/find/:id', async (req, res) => {
    try {
        const productID = await Product.findById(req.params.id)
        res.status(200).json(productID)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;