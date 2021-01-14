const Faker = require('faker');
const db = require('./index.js');
const Locations = require('./location.js');
const Restaurants = require('./restaurant.js');
const Attractions = require('./attraction.js');

const countryLatLong = [
  ['Martinique', 'France', 14.604, -61.074], ['Le Chesnay', 'France', 48.822, 2.122], ['Madrid, Spain', 40.416, -3.702], ['Hispania', 'Spain', 5.796, -75.904], ['Barcelona', 'Spain', 41.389, 2.159], ['Belmont', 'Spain', 10.668, -61.505], ['Vigo', 'Spain', 42.233, -8.722], ['Costa Bianca', 'Spain', 38.350, -0.467], ['London', 'England', 51.508, -0.125], ['Liverpool', 'England', 53.411, -2.978],
  ['Bristol', 'England', 51.455, -2.596], ['Derbyshire', 'England', 53.137, -1.610], ['Nottinghamshire', 'England', 53.128, -1.012], ['Leeds', 'England', 53.797, -1.547],['Stockport', 'England', 53.410, -2.157], ['Oxford', 'England', 51.75286, -1.25592], ['Berlin', 'Germany', 52.524, 13.410], ['Hamburg', 'Germany', 53.550, 9.992], ['Franken', 'Germany', 50.000, 9.000], ['Munich', 'Germany', 48.138, 11.575]];

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
