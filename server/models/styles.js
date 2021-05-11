const Sequelize = require('sequelize');
const db = require('../db/database.js');
const { Product, Relate, Feature, Style, Sku, Photo } = require('../db/Products.js');
const Skus = require('./skus.js')

const getStyles = async (id) => {
  try {
    const productRes = await Product.findOne({
      where: { id: id },
      include: [
        {
          model: Style,
          include: {
            model: Photo,
            attributes: ['url', 'thumbnail_url']
          }
        }
      ]
    });
    let response = { "product_id": id };
    let resSkus = await Promise.all(productRes.styles.map(async (style) => {
      style.dataValues.Skus = {};

      let styleSkus = await Skus.getSkus(style.style_id);
      styleSkus.forEach((sku) => {
        style.dataValues.Skus[sku.id] = { quantity: sku.quantity, size: sku.size }
      })

      return style;
    }))
    response.results = resSkus;
    return response;
  } catch (err) {
    console.log('err in styles --->', err)
  }
}

module.exports = { getStyles };