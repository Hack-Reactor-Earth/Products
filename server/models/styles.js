const Sequelize = require('sequelize');
const db = require('../db/database.js');
const { Product, Relate, Feature, Style, Sku, Photo } = require('../db/Products.js');
const Skus = require('./skus.js')

const getStyles = async (id) => {
  try {
    const productRes = await Product.findOne({
      where: { id: id },
      // include: Style
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
    // console.log('oneProduct response --->', response);
    let response = { "product_id": id };
    // response.results = productRes.styles;
    console.log('product response --->', response);
    let resSkus = await Promise.all(productRes.styles.map(async (style) => {
      // console.log('----------------style 1----------------', style.toJSON())
      style.dataValues.Skus = {};
      // console.log('----------------style 2----------------', style.toJSON())

      let styleSkus = await Skus.getSkus(style.style_id);
      // console.log('-------------------------------STYLE SKUS ----------------------', styleSkus);
      styleSkus.forEach((sku) => {
        style.dataValues.Skus[sku.id] = { quantity: sku.quantity, size: sku.size }
        // return
      })
      console.log('----------------style 3----------------', style)

      return style;
    }))
    // console.log('------------resSkus-----------', resSkus)
    response.results = resSkus;
    return response;
  } catch (err) {
    console.log('err in styles --->', err)
  }
}

module.exports = { getStyles };