const Payment = require("../models/Payment");

const addPayment = async (req, res) => {
    const newPayment = new Payment({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        cardNumber: req.body.cardNumber,
        nameOnCard: req.body.nameOnCard,
        expireDate: req.body.expireDate,
        cvvNumber: req.body.cvvNumber,
    });
    try {
        const savedPayment = await newPayment.save()
        res.status(201).json(savedPayment)
    } catch (err) {
        res.status(500).json(err);
    }
};

const getPayment = async (req, res) => {
    try {
        const PaymentID = await Payment.findById(req.params.id)
        res.status(200).json(PaymentID)
    } catch (err) {
        res.status(500).json(err)
    }
};

const editPayment = async (req, res) => {
    try {
        const updatePayment = await Payment.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true},
        )
        return res.status(200).json(updatePayment)
    } catch (err) {
        return res.status(500).json(err)
    }
};

const deletePayment = async (req, res) => {
    try {
        await Payment.findByIdAndDelete(req.params.id)
        return res.status(200).json("Payment has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
};

module.exports = {addPayment, getPayment, editPayment, deletePayment};