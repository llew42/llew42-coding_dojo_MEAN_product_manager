const express = require('express');
const controller = require('../controllers/productController');
const path = require('path');

module.exports = function(app){
  app.get('/product', controller.allProducts)
  app.get('/product/new', controller.newProduct)
  app.post('/product/new', controller.newProduct)
  app.get('/product/:id', controller.viewProduct)
  app.put('/product/edit/:id', controller.updateProduct)
  app.delete('/product/:id', controller.deleteProduct)
  app.put('/product/:id', controller.likeProduct)
  app.all('*', (req, res, next) => {
    res.sendFile(path.resolve("./angularApp/dist/angularApp/index.html"));
  })
}
