const Sequelize = require('sequelize');
const db = require('../db/database.js');
const { Product, Relate, Feature, Style, Sku, Photo } = require('../db/Products.js');

const getAllProducts =  async (page, count) => {
  let pages = page || 1;
  let limit = count || 5;
  let offset = 0;
  if (pages > 1) {
    offset = (pages - 1) * limit;
  }
  try {
   const response = await Product.findAll({ offset: offset, limit: limit });
  //  console.log('proucts response --->', response);
   return response;
  } catch (err) {
    console.log('err getting all products --->', err);
  }

}

module.exports = { getAllProducts }