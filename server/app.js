const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const port = 5000;

const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

module.exports = app;