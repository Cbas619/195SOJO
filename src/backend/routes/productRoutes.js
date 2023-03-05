const router = require("express").Router();
const Product = require("../models/Product");

router.post('/insert', async (req, res) => {
    const newProduct = new Product({
        productName: req.body.productName,
        image: req.body.image,
        description: req.body.description,
        rating: req.body.rating,
        price: req.body.price
    });
    try {
        const savedProduct = await newProduct.save()
        res.status(201).json(savedProduct)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/find/:id', async (req, res) => {
    try {
        const productID = await Product.findById(req.params.id)
        res.status(200).json(productID)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/all', async (req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.category
    try {
      let products

      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1)
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        })
      } else {
        products = await Product.find()
      }

      res.status(200).json(products)
    } catch (err) {
      res.status(500).json(err)
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true},
        )
        return res.status(200).json(updateProduct)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        return res.status(200).json("Product has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;