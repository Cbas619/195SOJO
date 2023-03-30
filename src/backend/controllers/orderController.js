const Order = require("../models/Order");

const addOrder = async (req, res) => {
    const newOrder = new Order({
        buyerId: req.body.buyerId,
        sellerId: req.body.sellerId,
        productId: req.body.productId,
        addressId: req.body.addressId,
    });
    try {
        const savedOrder = await newOrder.save()
        res.status(201).json(savedOrder)
    } catch (err) {
        res.status(500).json(err);
    }
};

const getOrder = async (req, res) => {
    try {
        const OrderID = await Order.findById(req.params.id)
        res.status(200).json(OrderID)
    } catch (err) {
        res.status(500).json(err)
    }
};

module.exports = {addOrder, getOrder};