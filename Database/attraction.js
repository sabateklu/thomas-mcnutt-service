const mongoose = require('mongoose');
const { db } = require('./index.js');

db();

mongoose.Promise = global.Promise;

const attractionSchema = new mongoose.Schema({
  name: String,
  ratings: {
    avg: { type: Number },
    total: { type: Number },
  },
  imageUrl: String,
  price: Number,
  description: String,
  _id: {
    type: String,
    default() {
      return new mongoose.Types.ObjectId();
    },
  },
});

const attraction = mongoose.model('attraction', attractionSchema);

module.exports = {

  Attractions: attraction,

  find: (req, res) => {
    attraction.find({}, (err, result) => {
      if (err) { res.status(400).send(err); } else res.status(200).send(result);
    });
  },

  create: (req, res) => {
    const obj = {
      name: req.body.name,

      ratings: {
        avg: req.body.ratings.avg,
        total: req.body.ratings.total,
      },

      imageUrl: req.body.imageUrl,
      price: req.body.price,
      description: req.body.description,
    };
    attraction.create(obj, (err, result) => {
      if (err) { res.status(400).send(err); } else res.status(201).send(result);
    });
  },

  update: (req, res) => {
    const id = { _id: req.params.id };
    const obj = {
      name: req.body.name,

      ratings: {
        avg: req.body.ratings.avg,
        total: req.body.ratings.total,
      },

      imageUrl: req.body.imageUrl,
      price: req.body.price,
      description: req.body.description,
    };
    attraction.updateOne(id, obj, (err, result) => {
      if (err) { res.status(400).send(err); } else res.status(200).send(result);
    });
  },

  delete: (req, res) => {
    const id = { _id: req.params.id };
    attraction.deleteOne({ _id: id }, (err, result) => {
      if (err) { res.status(400).send(err); } else res.status(200).send(result);
    });
  },
};
