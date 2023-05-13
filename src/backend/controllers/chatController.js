const Chat = require("../models/Chat");

const startChat = async (req, res) => {
    const newChat = new Chat({
        members: [req.body.senderId, req.body.receiverId],
        productId: req.body.productId,
        productName: req.body.productName,
    });

    try {
        const result = await newChat.save();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
};

const getId = async (req, res) => {
    try {
        const chat = await Chat.find({
            members: {$in: [req.params.userId]}
        })
        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json(error)
    }
};

const getTwoIds = async (req, res) => {
    try {
      const { firstId, secondId } = req.params;
  
      let chat = await Chat.findOne({
        members: { $all: [firstId, secondId] },
      });
  
      // Check if chat exists with the same seller
      if (chat) {
        // Check if the product ID is different
        if (chat.productId !== req.query.productId) {
          chat = null; // Reset chat if product ID is different
        }
      }
  
      res.status(200).json(chat);
    } catch (error) {
      res.status(500).json(error);
    }
  };

module.exports = { startChat, getId, getTwoIds };