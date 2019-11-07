'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://semana:semana@fabio-jecej.mongodb.net/balta?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


module.exports = mongoose;