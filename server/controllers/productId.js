const express = require('express');
const router = express.Router({ mergeParams : true });
const db = require('../db/database.js');
const productId = require('../models/productId.js');

router.get('/', async (req, res) => {
  console.log('req.params --->', req.params);
  let id = req.params.product_id;
  try {
    const response = await productId.getOneProduct(id);
    res.status(200).json(response);
  } catch (err) {
    console.log('err in router productId --->', err);
    res.status(401).json({message: 'error getting one product'});
  }
})

module.exports = router;