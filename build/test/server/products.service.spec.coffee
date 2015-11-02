express = require('express')
app = express()
expect = require('chai').expect
request = require('supertest')

dataSavedProduct = undefined
db = {
  saveProduct: (product) ->
    dataSavedProduct = product
}
productsService = require('../../server/data/products-service')(db, app)

newProduct = {
  'title': 'C# for Sociopaths' 
  'designer': 1
  'published': '2013-10-04T23:00:00.000Z'
  'liked': [1,3]
}

describe 'save data', ->
  it 'should pass the job to the database save', (done) ->
    request(app).post('/api/products').send(newProduct).end (err, res) -> 
      expect(dataSavedProduct).to.deep.equal(newProduct)
      done()
      return
    return
  return