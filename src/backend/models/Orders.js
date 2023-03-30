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
  addressId: {
    type: String,
    required: true,
    min: 2
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);