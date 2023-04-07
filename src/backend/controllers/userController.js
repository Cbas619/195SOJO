const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const currentUser = async (req, res) => {
    const cookie = req.cookies['jwt'];
    const claims = jwt.verify(cookie, process.env.TOKEN)
    if(!claims) {
        return res.status(401).json("Not Authorized");
    }
    const user = await User.findOne({ _id: claims._id })
    return res.send(user)
};

const selectUser = async (req, res) => {
    try {
        const userID = await User.findById(req.params.id)
        res.status(200).json(userID)
    } catch (error) {
        return res.status(500).json(err)
    }
};

const editUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    try {
        const updateUsers = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
                password: hashedPassword
            },
            {new: true},
        )
        return res.status(200).json(updateUsers)
    } catch (err) {
        return res.status(500).json(err)
    }
};

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        return res.status(200).json("User has been deleted")
    } catch (err) {
        return res.status(500).json(err)
    }
};


module.exports = { currentUser, selectUser, editUser, deleteUser};