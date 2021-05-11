const Sequelize = require('sequelize');
const db = require('../db/database.js');
const { Product, Relate, Feature, Style, Sku, Photo } = require('../db/Products.js');

const getOneProduct = async (id) => {
  try {
    const response = await Product.findOne({
      where: { id: id },
      include: Feature
    });
    // console.log('oneProduct response --->', response);
    return response;
  } catch (err) {
    console.log('err in OneProduct --->', err)
  }
}

module.exports = { getOneProduct };

// querry for product with product id
// querry for features with product id
// create a features array and map over results from features querry and push into array
// create a result object and loop over results from product querry and set each key as a property on result object
// set features array as a property on result object