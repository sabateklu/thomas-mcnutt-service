const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/maps';
const db = mongoose.connect(mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true,
})
  .then(() => console.log('connected to mongoDB'))
  .catch((err) => console.log('Error connecting to mongoDB', err));

module.exports = db;
