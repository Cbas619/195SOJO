const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  image: {
    type: String,
    required: true,
    min: 2,
    max: 1024,
  },
  description: {
    type: String,
    required: true,
    min: 2,
    max: 1024,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
