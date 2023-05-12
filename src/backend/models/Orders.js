const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  buyerId: {
    type: String,
    required: true,
    min: 2
  },
  sellerId: {
    type: String,
    required: true,
    min: 2
  },
  productId: {
    type: String,
    required: true,
    min: 2
  },
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
});

module.exports = mongoose.model("Order", orderSchema);