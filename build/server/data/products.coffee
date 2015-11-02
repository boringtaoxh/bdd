promise = require 'bluebird'
mongoose = require 'mongoose'

exports.findProducts = (query) ->
	promise.cast(mongoose.model('Product').find({}).exec())

exports.findProductById = ->
	promise.cast(mongoose.model('Product').findById('550412224d0bd18c25c563a7').exec())

exports.findProductByTitle = ->
	promise.cast(mongoose.model('Product').findOne({'title': 'C# for Sociopaths'}).exec())

exports.likeTotal = (product) ->
	product['liked'].length