mongoose = require 'mongoose'
Product = mongoose.model 'Product'
productsData = require('../data/products')


module.exports = (app) ->
  app.get '/api/products', (req, res) ->
  	productsData.findProducts().then (collection) ->
    	res.send collection
    return
  app.get '*', (req, res) ->
    res.render 'layout'
    return
  return