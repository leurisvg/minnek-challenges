const { Schema, model } = require('mongoose');

const productSchema = Schema({
  name: {
    type: String,
    unique: true,
    required: [ true, 'Name is required' ],
  },
  price: {
    type: Number,
    required: [ true, 'Price is required' ],
  },
  description: {
    type: String,
    required: [ true, 'Description is required' ],
  },
  image: {
    data: Buffer,
    contentType: String
  }
});

productSchema.methods.toJSON = function () {
  const { __v, _id, ...product } = this.toObject();
  product.id = _id;
  return product;
};

module.exports = model('Product', productSchema);
