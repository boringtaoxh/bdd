var Product, db, expect, mongoose, productsData, promise;

expect = require('chai').expect;

promise = require('bluebird');

mongoose = require('mongoose');

db = require('../../server/config/db');

Product = require('../../server/models/product');

productsData = require('../../server/data/products');

describe('get data', function() {
  var product, products;
  product = void 0;
  products = void 0;
  before(function(done) {
    db.connectDB('mongodb://root:ll0614@ds033439.mongolab.com:33439/mean').then(productsData.findProducts).then(function(data) {
      products = data;
    }).then(productsData.findProductById).then(function(data) {
      product = data;
      done();
    });
  });
  it('should never be empty', function() {
    expect(products.length).to.be.at.least(1);
  });
  it('should return the first id', function() {
    expect(products[0].id).not.equal(void 0);
  });
  it('should return one product', function() {
    expect(product).not.equal(void 0);
  });
  it('should return the first id', function() {
    expect(product['id']).equal('550412224d0bd18c25c563a7');
  });
  it('should show like total', function() {
    var likeTotalCount;
    likeTotalCount = productsData.likeTotal(product);
    expect(likeTotalCount).equal(2);
  });
});
