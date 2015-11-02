var app, dataSavedProduct, db, expect, express, newProduct, productsService, request;

express = require('express');

app = express();

expect = require('chai').expect;

request = require('supertest');

dataSavedProduct = void 0;

db = {
  saveProduct: function(product) {
    return dataSavedProduct = product;
  }
};

productsService = require('../../server/data/products-service')(db, app);

newProduct = {
  'title': 'C# for Sociopaths',
  'designer': 1,
  'published': '2013-10-04T23:00:00.000Z',
  'liked': [1, 3]
};

describe('save data', function() {
  it('should pass the job to the database save', function(done) {
    request(app).post('/api/products').send(newProduct).end(function(err, res) {
      expect(dataSavedProduct).to.deep.equal(newProduct);
      done();
    });
  });
});
