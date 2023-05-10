const Order = require("../models/Orders");

const addOrder = async (req, res) => {
    const newOrder = new Order({
        buyerId: req.body.buyerId,
        productId:[]
    });
    try {
        const savedOrder = await newOrder.save()
        res.status(201).json(savedOrder)
    } catch (err) {
        res.status(500).json(err);
    }
};

const putOrder = async (req, res) => {
    Order.findByIdAndUpdate(req.body.productId, {
        $push:{productId:req.user._id}
    }, {
        new: true
    })
    try {
        const savedOrder = await putOrder.save()
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

const getAllOrders = async (req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.category
    try {
      let orders

      if (qNew) {
        orders = await Order.find().sort({ createdAt: -1 }).limit(1)
      } else if (qCategory) {
        orders = await Order.find({
          categories: {
            $in: [qCategory],
          },
        })
      } else {
        orders = await Order.find()
      }

      res.status(200).json(orders)
    } catch (err) {
      res.status(500).json(err)
    }
};

module.exports = {addOrder, getOrder, getAllOrders, putOrder};
