const db = require('./index.js');
const Locations = require('./location.js');
const Restaurants = require('./restaurant.js');
const Attractions = require('./attraction.js');

// Location data example
// Name: String,
// coords: {
//   lat: Number,
//   long: Number,
// },
// ratings: Array,
// address: {
//   street: String,
//   city: String,
//   country: String,
//   zip: Number,
// },
const sampleLocations = [{

}];

// Restaurant data example
// name: String,
// ratings: Array,
// imageUrl: String,
const sampleRestaurants = [{

}];

// Attraction data example
// name: String,
// ratings: Array,
// imageUrl: String,
// price: Number,
const sampleAttractions = [{

}];

const insertSampleLocations = function () {
  Locations.create(sampleLocations)
    .then(() => db.disconnect());
};

const insertSampleRestaurants = function () {
  Restaurants.create(sampleRestaurants)
    .then(() => db.disconnect());
};

const insertSampleAttractions = function () {
  Attractions.create(sampleAttractions)
    .then(() => db.disconnect());
};

insertSampleLocations();
insertSampleRestaurants();
insertSampleAttractions();
