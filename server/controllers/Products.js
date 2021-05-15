const express = require('express');
const router = express.Router();
const db = require('../db/database.js');
const products = require('../models/products.js');
const nodeCache = require('node-cache');
const cache = new nodeCache({ maxKeys: 100 });
// const { Product, Relate, Feature, Style, Sku, Photo } = require('../db/Products.js');


router.get('/', async (req, res) => {
  console.log('products params --->', req.query)
  let page = req.query.page || 1;
  let count = req.query.count || 5;
  let cacheKey = `${page}${count}`;
  if (cache.has(cacheKey)) {
    res.status(200).send(cache.get(cacheKey));
  } else {
    try {
      const response = await products.getAllProducts(page, count);
      cache.set(cacheKey, response);
      res.status(200).json(response);
    } catch (err) {
      console.log('err in app.get --->', err);
      res.status(401).json({message: 'error getting products'});
    }
  }
})

module.exports = router;