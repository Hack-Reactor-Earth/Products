const Sequelize = require('sequelize');
const db = require('./database.js');

const Product = db.define('product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  slogan: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  category: {
    type: Sequelize.STRING
  },
  default_price: {
    type: Sequelize.STRING
  }
}, { timestamps: false });

const Relate = db.define('relate', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  productId: {
    type: Sequelize.INTEGER,
    references: {
      model: Product,
      key: 'id'
    }
  },
  relatedProductId: {
    type: Sequelize.INTEGER,
    references: {
      model: Product,
      key: 'id'
    }
  }
}, { taleName: 'related', timestamps: false});

// Product.belongsToMany(Product, {as: 'relatedProduct', through: Relate});

const Feature = db.define('feature', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  feature: {
    type: Sequelize.STRING
  },
  value: {
    type: Sequelize.STRING
  }
}, { timestamps: false });

Feature.belongsTo(Product);

const Style = db.define('style', {
  style_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  sale_price: {
    type: Sequelize.STRING,
    allowNull: true
  },
  original_price: {
    type: Sequelize.INTEGER
  },
  "default?": {
    type: Sequelize.BOOLEAN
  }
}, { timestamps: false });

Style.belongsTo(Product);

const Sku = db.define('sku', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  size: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.INTEGER
  }
}, { timestamps: false });

Sku.belongsTo(Style);

const Photo = db.define('photo', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  url: {
    type: Sequelize.STRING
  },
  thumbnail_url: {
    type: Sequelize.STRING
  }
}, { timestamps: false });

Photo.belongsTo(Style);

Product.hasMany(Feature);
Product.hasMany(Style);

Style.hasMany(Sku);
Style.hasMany(Photo);

Product.sync();
Relate.sync();
Feature.sync();
Style.sync();
Sku.sync();
Photo.sync();

module.exports = { Product, Relate, Feature, Style, Sku, Photo };



// There were errors in the photos csv file which needed cleanup many “ at the end of urls were missing and line 371 was a duplicate.  Features data file was missing the top header added: id, productID, feature and value to top line. In the Product file close to the top there was a default_sale: in the cell with the number 49.