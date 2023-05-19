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
  },
  description: {
    type: String,
    required: true,
    min: 2,
    max: 1024,
  },
  rating: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  sellerId: {
    type: String,
    required: true,
    min: 2
  },
  purchased: {
    type: Boolean,
    required: true
  },
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  paymentType: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
});

module.exports = mongoose.model("Product", productSchema);
