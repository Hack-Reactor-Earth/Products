const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const products = require('./models/products.js');

const port = 5000;

const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/products', require('./controllers/Products.js'));
app.use('/products/:product_id', require('./controllers/productId.js'));
app.use('/products/:product_id/styles', require('./controllers/styles.js'));
app.use('/products/:product_id/related', require('./controllers/related.js'));
app.use('/products/:product_id/skus', require('./controllers/skus.js'));


// app.get('/', async (req, res) => {
//   try {
//     const response = await products.getAllProducts(1, 5);
//     res.status(200).json(response);
//   } catch (err) {
//     console.log('err in app.get --->', err);
//     res.status(401).json({message: 'error getting products'});
//   }
// })

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

module.exports = app;