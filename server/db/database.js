const Sequelize = require('sequelize');
const database = new Sequelize('products', 'postgres', 'sdc', {host: '20.51.213.99', port: '5432', dialect: 'postgres'});

module.exports = database;