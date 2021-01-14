const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const attractionSchema = new mongoose.Schema({
  name: String,
  ratings: Array,
  imageUrl: String,
  price: Number,
});

const attraction = mongoose.model('attraction', attractionSchema);

module.exports = {
  attraction,
};
