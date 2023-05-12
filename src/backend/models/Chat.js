const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  members: {
    type: Array,
  },
  productId: {
    type: String,
    min: 2
  },
  productName: {
    type: String,
    min: 2,
    max: 255,
  },
},
 {
    timestamps: true,
 });

module.exports = mongoose.model("Chat", chatSchema);