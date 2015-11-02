var Product, mongoose, productSchema;

mongoose = require('mongoose');

productSchema = mongoose.Schema({
  title: {
    type: String,
    required: '{PATH} is required!'
  },
  designer: {
    type: Number,
    required: '{PATH} is required!'
  },
  published: {
    type: Date,
    required: '{PATH} is required!'
  },
  liked: [Number]
});

Product = mongoose.model('Product', productSchema);
