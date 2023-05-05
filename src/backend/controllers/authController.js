const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    //Check if email is already exists
    const emailExists = await User.findOne({ email: req.body.email });
        if (emailExists) {
            return res.status(400).send("Email already exists.");
        }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Declare a variable user to hold the info. that register
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        const savedUser = await user.save();
        return res.status(200).send(savedUser);
    } catch {
        return res.status(400).send(err)
    }
};

const login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    try {
        if (!user) {
            return res.status(400).send("Email already exists.");
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).send("Wrong email or password");
        }
        
        const token = jwt.sign({_id: user._id}, process.env.TOKEN, {
            expiresIn: "60m",
        })
        res.cookie('jwt', token, {
            httpOnly: false,
            maxAge: 24 * 60 * 60 * 1000, //1 day
        })

        return res.status(200).json(token)
    } catch (err) {
        return res.status(500).json(err);
    }
};

const logout = async (req, res) => {
    // res.cookie('jwt', '', {maxAge: 0});
    res.clearCookie("jwt", {
        httpOnly: "false",
    })
    res.status(200).json('Logged Out')
};




module.exports = {login, logout, register}