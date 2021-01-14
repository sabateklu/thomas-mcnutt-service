const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const restaurantSchema = new mongoose.Schema({
  name: String,
  ratings: Array,
  imageUrl: String,
});

const restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = {

  find(req, res) {
    restaurant.find({}, (err, result) => {
      if (err) { res.send(err); } else res.send(result);
    });
  },

  create(req, res) {
    const obj = {
      name: req.body.name,
      ratings: [req.body.ratings],
      imageUrl: req.body.imageUrl,
    };
    restaurant.create(obj, (err, result) => {
      if (err) { res.send(err); } else res.send(result);
    });
  },

  update(req, res) {
    const id = { _id: req.params.id };
    const obj = {
      name: req.body.name,
      ratings: [req.body.ratings],
      imageUrl: req.body.imageUrl,
    };
    restaurant.updateOne(id, obj, (err, result) => {
      if (err) { res.send(err); } else res.send(result);
    });
  },

  delete(req, res) {
    const id = { _id: req.params.id };
    restaurant.deleteOne({ _id: id }, (err, result) => {
      if (err) { res.send(err); } else res.send(result);
    });
  },

};
