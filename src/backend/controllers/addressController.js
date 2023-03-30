const Address = require("../models/Address");

const addAddress = async (req, res) => {
    const newAddress = new Address({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        addressLine: req.body.addressLine,
        city: req.body.city,
        postalCode: req.body.postalCode,
        state: req.body.postalCode,
        buyerId: req.body.buyerId,
    });
    try {
        const savedAddress = await newAddress.save()
        res.status(201).json(savedAddress)
    } catch (err) {
        res.status(500).json(err);
    }
};

const getAddress = async (req, res) => {
    try {
        const addressID = await Address.findById(req.params.id)
        res.status(200).json(addressID)
    } catch (err) {
        res.status(500).json(err)
    }
};

const editAddress = async (req, res) => {
    try {
        const updateAddress = await Address.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true},
        )
        return res.status(200).json(updateAddress)
    } catch (err) {
        return res.status(500).json(err)
    }
};

const deleteAddress = async (req, res) => {
    try {
        await Address.findByIdAndDelete(req.params.id)
        return res.status(200).json("Address has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
};

module.exports = {addAddress, getAddress, editAddress, deleteAddress};