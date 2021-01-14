const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const locationSchema = new mongoose.Schema({
  Name: String,
  coords: {
    lat: { type: Number },
    long: { type: Number },
  },
  ratings: {
    avg: { type: Number },
    total: { type: Number },
  },
  address: {
    street: String,
    city: String,
    country: String,
    zip: String,
  },
});

const location = mongoose.model('location', locationSchema);

module.exports = {

  Locations: location,

  find: (req, res) => {
    location.find({}, (err, result) => {
      if (err) { res.send(err); } else res.send(result);
    });
  },

  create: (req, res) => {
    const obj = {
      name: req.body.name,
      coords: [req.body.ratings],
      imageUrl: req.body.imageUrl,
    };
    location.create(obj, (err, result) => {
      if (err) { res.send(err); } else res.send(result);
    });
  },

  update: (req, res) => {
    const id = { _id: req.params.id };
    const obj = {
      name: req.body.name,
      ratings: [req.body.ratings],
      imageUrl: req.body.imageUrl,
    };
    location.updateOne(id, obj, (err, result) => {
      if (err) { res.send(err); } else res.send(result);
    });
  },

  delete: (req, res) => {
    const id = { _id: req.params.id };
    location.deleteOne({ _id: id }, (err, result) => {
      if (err) { res.send(err); } else res.send(result);
    });
  },
};
