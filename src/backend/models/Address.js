const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
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
  addressLine: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  city: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  }, 
  postalCode: {
    type: Number,
    required: true,
    min: 5,
  },
  state: {
    type: String,
    required: true,
    min:2,
  },
  buyerId: {
    type: String,
  }
  
});

module.exports = mongoose.model("Address", addressSchema);