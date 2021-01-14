const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/maps';
mongoose.connect(mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true,
})
  .catch((err) => console.log('Error connecting to mongoDB', err));

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});
module.exports = db;
