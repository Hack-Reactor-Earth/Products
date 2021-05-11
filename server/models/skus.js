const Sequelize = require('sequelize');
const db = require('../db/database.js');
const { Product, Relate, Feature, Style, Sku, Photo } = require('../db/Products.js');

const getSkus = async (id) => {
  try {
    const response = await Sku.findAll({
      where: { styleStyleId: id }
    });
    // console.log('Sku response --->', response);
    return response;
  } catch (err) {
    console.log('err in Skus --->', err)
  }
}

module.exports = { getSkus };