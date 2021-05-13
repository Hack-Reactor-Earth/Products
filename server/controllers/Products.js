const express = require('express');
const router = express.Router();
const db = require('../db/database.js');
const products = require('../models/products.js');
// const { Product, Relate, Feature, Style, Sku, Photo } = require('../db/Products.js');

router.get('/', async (req, res) => {
  console.log('products params --->', req.query)
  let page = req.query.page;
  let count = req.query.count
  try {
    const response = await products.getAllProducts(page, count);
    res.status(200).json(response);
  } catch (err) {
    console.log('err in app.get --->', err);
    res.status(401).json({message: 'error getting products'});
  }
})

module.exports = router;