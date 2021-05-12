const Sequelize = require('sequelize');
const database = new Sequelize('products', 'postgres', 'sdc', {host: '20.51.213.99', port: '5432', dialect: 'postgres'});
//const database = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/products', {logging: false});

module.exports = database;