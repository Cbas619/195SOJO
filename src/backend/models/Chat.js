const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  members: {
    type: Array,
  },
  productId: {
    type: String,
    required: true,
    min: 2
  },
},
 {
    timestamps: true,
 });

module.exports = mongoose.model("Chat", chatSchema);