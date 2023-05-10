const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  buyerId: {
    type: String,
    required: true,
    min: 2
  },
  productId: {
    type: Array,
  },
  
});

module.exports = mongoose.model("Order", orderSchema);