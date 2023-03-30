const Chat = require("../models/Chat");

const startChat = async (req, res) => {
    const newChat = new Chat({
        members: [req.body.senderId, req.body.receiverId]
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
        const chat = await Chat.findOne({
            members: {$all: [req.params.firstId, req.params.secondId]}
        })
        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json(error)
    }
};

module.exports = { startChat, getId, getTwoIds };