const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  chatId: {
    type: String,
  },
  text: {
    type: String,
  },
  senderId: {
    type: String,
  },

},
    {
    timestamps: true,
    });

module.exports = mongoose.model("Message", messageSchema);