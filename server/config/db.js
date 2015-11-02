var Product, mongoose, promise;

promise = require('bluebird');

mongoose = require('mongoose');

Product = require('../models/product');

exports.connectDB = promise.promisify(mongoose.connect, mongoose);
