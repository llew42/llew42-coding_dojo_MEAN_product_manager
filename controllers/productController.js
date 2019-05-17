const Product = require('../models/product');
// const { body,validationResult } = require('express-validator/check');
// const { sanitizeBody } = require('express-validator/filter');

module.exports = {
  allProducts: function(req, res){
    Product.find({}).sort({type: 1})
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },

  newProduct: function(req, res){
    Product.create(req.body)
      .then(data => res.json(data))
      .catch(data => res.json(data))
  },

  viewProduct: function(req, res){
    Product.findById(req.params.id)
      .then(data => res.json(data))
      .catch(data => res.json(data))
  },

  updateProduct: function(req, res){
  Product.findByIdAndUpdate({_id:req.params.id},
    { $set: req.body }, { runValidators: true } )
    .then(data => res.json(data))
    .catch(data => res.json(data))
  },

  deleteProduct: function(req, res){
    Product.deleteOne({_id:req.params.id})
    .then(data => res.json(data))
    .catch(data => res.json(data))
  }
};
