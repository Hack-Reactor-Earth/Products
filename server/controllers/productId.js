const express = require('express');
const router = express.Router({ mergeParams : true });
const db = require('../db/database.js');
const productId = require('../models/productId.js');
const nodeCache = require('node-cache');
const cache = new nodeCache({ maxKeys: 100 });

router.get('/', async (req, res) => {
  console.log('req.params --->', req.params);
  let id = req.params.product_id;
  let cacheKey = id;
  if (cache.has(cacheKey)) {
    let value = cache.get(cacheKey);
    res.status(200).json(JSON.parse(value));
  } else {
    try {
      const response = await productId.getOneProduct(id);
      cache.set(cacheKey, JSON.stringify(response));
      res.status(200).json(response);
    } catch (err) {
      console.log('err in router productId --->', err);
      res.status(401).json({message: 'error getting one product'});
    }
  }
})

module.exports = router;