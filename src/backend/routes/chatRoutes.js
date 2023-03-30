const router = require("express").Router();
const { getId, getTwoIds, startChat } = require("../controllers/chatController")

router.post("/start", startChat);
router.get("/:userId", getId);
router.get("/find/:firstId/:secondId", getTwoIds);

module.exports = router;