const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/googleMapService';
const db = mongoose.connect(mongoURI);
module.exports = db;
