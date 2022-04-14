const { response, request } = require('express');
const fs = require('fs');
const path = require('path');

const Product = require('../models/product');

const createProduct = async (req = request, res = response) => {
  const { name, price, description, contentType } = req.body;

  try {
    const product = new Product({
      name,
      price,
      description,
      image: {
        data: fs.readFileSync(path.join(process.cwd() + '/uploads/' + req.file.filename)),
        contentType,
      }
    });

    await product.save();

    res.status(201).json({
      data: product,
      succeeded: true,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      data: 'Internal error',
      succeeded: false,
    });
  }
};

const getProducts = async (req = request, res = response) => {
  try {
    const products = await Product.find();

    res.json({
      data: products,
      succeeded: false,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      data: 'Internal error',
      succeeded: false,
    });
  }
};

module.exports = {
  createProduct,
  getProducts,
};
