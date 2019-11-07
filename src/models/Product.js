'use strick';

const moongose = require('mongoose');
//para ser unico
moongose.set('createIndexes', true)

ProductSchema = new moongose.Schema({

  nome: {
    type: String,
    required: true,
    trim: true
  },

  slug: {
    type: String,
    required: [true, 'O Slug é obrigatório'],
    trim: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true
  },

  active: {
    type: Boolean,
    required: true,
    default: true
  },

  tags: [{
    type: String,
    required: true
  }]
},
  {
    timestamps: true
  }
);

module.exports = moongose.model('Product', ProductSchema);