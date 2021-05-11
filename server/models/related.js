const Sequelize = require('sequelize');
const db = require('../db/database.js');
const { Product, Relate, Feature, Style, Sku, Photo } = require('../db/Products.js');

const getRelatedProducts = async (id) => {
  try {
    const response = await Relate.findAll({
      where: { productId: id }
    });
    // console.log('related response --->', response);
    let relatedIDs = [];
    response.forEach(id => relatedIDs.push(id.relatedProductId))
    return relatedIDs;
  } catch (err) {
    console.log('err in RelatedProducts --->', err)
  }
}

module.exports = { getRelatedProducts };