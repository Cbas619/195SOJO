

const { query } = require("express");
const Product = require("../models/Product");


const insertItem = async (req, res) => {
    const newProduct = new Product({
        productName: req.body.productName,
        image: req.body.image,
        description: req.body.description,
        rating: req.body.rating,
        price: req.body.price,
        category: req.body.category,
        school: req.body.school,
        sellerId: req.body.sellerId,
        purchased: false
    });
    try {
        const savedProduct = await newProduct.save()
        res.status(201).json(savedProduct)
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSpecificItem = async (req, res) => {
    try {
        const productID = await Product.findById(req.params.id)
        res.status(200).json(productID)
    } catch (err) {
        res.status(500).json(err)
    }
};


const PAGE_SIZE = 10;
const searchItem = async (req, res) => {
    try {
      const { query } = req;
      const pageSize = query.pageSize || PAGE_SIZE;
      const page = query.page || 1;
      const category = query.category || '';
      const price = query.price || '';
      const order = query.order || '';
      const searchQuery = query.query || '';
      const purchased = query.purchased || 'false';
      const school = query.school || ''
  
      const queryFilter = searchQuery && searchQuery !== 'all' ? { productName: { $regex: searchQuery, $options: 'i' } } : {};
      const categoryFilter = category && category !== 'all' ? { category } : {};
      const priceFilter =
        price && price !== 'all'
          ? {
              price: {
                $gte: Number(price.split('-')[0]),
                $lte: Number(price.split('-')[1]),
              },
            }
          : {};
      const sortOrder =
        order === 'featured'
          ? { featured: -1 }
          : order === 'lowest'
          ? { price: 1 }
          : order === 'highest'
          ? { price: -1 }
          : order === 'newest'
          ? { createdAt: -1 }
          : { _id: -1 };
  
      const filter = {
        ...queryFilter,
        ...categoryFilter,
        ...priceFilter,
        purchased: purchased === 'false' ? false : purchased, // Add filter for 'purchased' field
      };
  
      const products = await Product.find(filter)
        .sort(sortOrder)
        .skip(pageSize * (page - 1))
        .limit(pageSize);
  
      const countProducts = await Product.countDocuments(filter); // Use the same filter for counting

      const countSchoolProducts = await Product.countDocuments({ school });
  
      res.send({
        products,
        countProducts,
        countSchoolProducts,
        page,
        pages: Math.ceil(countProducts / pageSize),
      });
    } catch (err) {
      res.status(500).json(err);
    }
  };

const getAllItems = async (req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.category
    try {
      let products

      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1)
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        })
      } else {
        products = await Product.find()
      }

      res.status(200).json(products)
    } catch (err) {
      res.status(500).json(err)
    }
};

const editItem = async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true},
        )
        return res.status(200).json(updateProduct)
    } catch (err) {
        return res.status(500).json(err)
    }
};

const deleteItem = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        return res.status(200).json("Product has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
};

const getCategories = async (req, res) => {
    try {
        const categories = await Product.find().distinct('category');
        res.send(categories);
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {insertItem, getSpecificItem, getAllItems, editItem, deleteItem, searchItem, getCategories};