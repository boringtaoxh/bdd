var Product, mongoose, productsData;

mongoose = require('mongoose');

Product = mongoose.model('Product');

productsData = require('../data/products');

module.exports = function(app) {
  app.get('/api/products', function(req, res) {
    productsData.findProducts().then(function(collection) {
      return res.send(collection);
    });
  });
  app.get('*', function(req, res) {
    res.render('layout');
  });
};
