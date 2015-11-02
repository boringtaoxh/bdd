var mongoose, promise;

promise = require('bluebird');

mongoose = require('mongoose');

exports.findProducts = function(query) {
  return promise.cast(mongoose.model('Product').find({}).exec());
};

exports.findProductById = function() {
  return promise.cast(mongoose.model('Product').findById('550412224d0bd18c25c563a7').exec());
};

exports.findProductByTitle = function() {
  return promise.cast(mongoose.model('Product').findOne({
    'title': 'C# for Sociopaths'
  }).exec());
};

exports.likeTotal = function(product) {
  return product['liked'].length;
};
