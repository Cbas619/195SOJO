const { Router } = require("express");
const uploadMiddleware = require("../controllers/multerControlller");
const Product = require("../models/Product");

const router = Router();

// get api
router.get("/api/insert", async (req, res) => {
  const allImages = await Product.find().sort({ createdAt: "descending" });
  res.send(allImages);
});

//post api
router.post("/api/insert", uploadMiddleware.single("image"), (req, res) => {
  const image = req.file.filename;

  console.log(image);

  Product.create({ image })
    .then((data) => {
      console.log("Uploaded Successfully...");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
