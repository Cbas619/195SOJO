const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.get('/user', async (req, res) => {
    const cookie = req.cookies['jwt'];
    const claims = jwt.verify(cookie, process.env.TOKEN)
    if(!claims) {
        return res.status(401).json("Not Authorized");
    }
    const user = await User.findOne({ _id: claims._id })
    res.send(user)
})

module.exports = router;