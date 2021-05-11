// const database = require('./server/db/database.js');
// const Product = require('./server/db/Products.js');

// let Products = [];

// const seed = async () => {
//   await database.sync({force: true})
//   await Promise.all(Products.map(product => {
//     return Product.create(product);
//   }));
//   // await Promise.all(Products.map(related => {
//   //   return Product.create(related);
//   // }));
//   // await Promise.all(Products.map(feature => {
//   //   return Product.create(feature);
//   // }));
//   // await Promise.all(Products.map(style => {
//   //   return Product.create(style);
//   // }));
//   // await Promise.all(Products.map(sku => {
//   //   return Product.create(sku);
//   // }));
//   // await Promise.all(Products.map(photo => {
//   //   return Product.create(photo);
//   // }));

//   console.log('success seeding')
//   database.close()
// }

// seed()
//   .catch(err => {
//     console.error('error connecting --->', err)
//     database.close()
//   })