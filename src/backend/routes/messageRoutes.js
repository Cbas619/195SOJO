const router = require("express").Router();
const { newMessage, chatId } = require("../controllers/messageController")

router.post("/", newMessage);
router.get("/:chatId", chatId)

module.exports = router;