'use strict'

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://semana:semana@fabio-jecej.mongodb.net/balta?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const indexRoutes = require('./routes/routes-index');
const routesProduct = require('./routes/routes-product');

app.use('/', indexRoutes);
app.use('/products', routesProduct);

module.exports = app;