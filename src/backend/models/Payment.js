const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
  email: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  address: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  city: {
    type: String,
    required: true,
    min: 2,
    max: 1024,
  },
  state: {
    type: String,
    required: true,
    min: 2,
    max: 1024,
  },
  zip: {
    type: Number,
    required: true,
    min: 2,
  },
  cardNumber: {
    type: String,
    required: true,
    min: 6,
  },
  nameOnCard: {
    type: String,
    required: true,
    min: 2,
    max: 1024,
  },
  expireDate: {
    type: Number,
    required: true,
    min: 3,
  },
  cvvNumber: {
    type: Number,
    required: true,
    min: 3,
  },
  productId: {
    type: String,
    required: true,
    min: 2,
    max: 1024,
  },
  
});

module.exports = mongoose.model("Payment", userSchema);
