const request = require('supertest');
// const {
//   describe, beforeAll, afterAll, expect, test, it,
// } = require('jest');
const server = require('../../Server/index.js');
const { db, dbDisc } = require('../../Database/index.js');

describe('Turning Server on for tests', () => {
  beforeAll(() => {
    db();
  });

  afterAll(() => {
    dbDisc();
  });

  describe('Testing Root Route', () => {
    test('It should response the Get method when accessing the root', () => request(server)
      .get('/')
      .expect(200));
  });

  describe('Testing Location Routes', () => {
    // Location route tests

    const locationExample = {
      Name: 'London',
      coords: {
        lat: '51.507',
        long: '0.127',
      },
      ratings: {
        avg: '4.5',
        total: '745',
      },
      address: {
        street: '88 Station Road',
        city: 'London',
        country: 'England',
        zip: 'EC96',
      },
      _id: '5555',
    };

    test('Location should send a 200 response code for the get method', () => request(server)
      .get('/api/location')
      .expect(200));

    test('Location should send a 201 response code for the create method', () => request(server)
      .post('/api/location')
      .set('Content-type', 'application/json')
      .send({ locationExample })
      .expect(201));

    test('Location should send a 201 response code for the put method', () => request(server)
    // eslint-disable-next-line no-underscore-dangle
      .put('/api/location5555')
      .send({ locationExample })
      .expect(200));

    test('Location should send a 200 response code for the delete method', () => request(server)
      .delete('/api/location5555')
      .expect(200));
  });

  describe('Testing Attraction Routes', () => {
    // Attraction route tests
    const attractionExample = {
      name: 'skydiving',
      ratings: {
        avg: 3,
        total: 42,
      },
      imageUrl: 'http://placeimg.com/640/480',
      description: 'This is a paragraph!',
      price: '200',
      _id: '6666',
    };

    test('Attraction should send a 200 response code for the get method', () => request(server)
      .get('/api/attraction')
      .expect(200));

    test('Attraction should send a 201 response code for the create method', () => request(server)
      .post('/api/attraction')
      .set('Content-type', 'application/json')
      .send({ attractionExample })
      .expect(201));

    test('Attraction should send a 201 response code for the put method', () => request(server)
    // eslint-disable-next-line no-underscore-dangle
      .put('/api/attraction6666')
      .send({ attractionExample })
      .expect(200));

    test('Attraction should send a 200 response code for the delete method', () => request(server)
      .delete('/api/attraction6666')
      .expect(200));
  });

  describe('Testing Restaurant Routes', () => {
    // Restaurant route tests

    const restaurantExample = {
      name: 'Fake Bagels',
      ratings: {
        avg: 5,
        total: 773,
      },
      imageUrl: 'http://placeimg.com/640/480',
      _id: 7777,
    };

    test('Restaurant should send a 200 response code for the get method', () => request(server)
      .get('/api/restaurant')
      .expect(200));

    test('Restaurant should send a 201 response code for the create method', () => request(server)
      .post('/api/restaurant')
      .set('Content-type', 'application/json')
      .send({ restaurantExample })
      .expect(201));

    test('Restaurant should send a 201 response code for the put method', () => request(server)
    // eslint-disable-next-line no-underscore-dangle
      .put('/api/restaurant7777')
      .send({ restaurantExample })
      .expect(200));

    test('Restaurant should send a 200 response code for the delete method', () => request(server)
      .delete('/api/restaurant7777')
      .expect(200));
  });
});

// Location API
// app.get('/api/location', (req, res) => {
//   Locations.find(req, res);
// });
// app.post('/api/location', (req, res) => {
//   Locations.create(req, res);
// });
// app.put('/api/location:id', (req, res) => {
//   Locations.update(req, res);
// });
// app.delete('/api/location:id', (req, res) => {
//   Locations.delete(req, res);
// });

// // RESTAURANT API
// app.get('/api/restaurant', (req, res) => {
//   Restaurants.find(req, res);
// });
// app.post('/api/restaurant', (req, res) => {
//   Restaurants.create(req, res);
// });
// app.put('/api/restaurant:id', (req, res) => {
//   Restaurants.update(req, res);
// });
// app.delete('/api/restaurant:id', (req, res) => {
//   Restaurants.delete(req, res);
// });

// // ATTRACTION API
// app.get('/api/attraction', (req, res) => {
//   Attractions.find(req, res);
// });
// app.post('/api/attraction', (req, res) => {
//   Attractions.create(req, res);
// });
// app.put('/api/attraction:id', (req, res) => {
//   Attractions.update(req, res);
// });
// app.delete('/api/attraction:id', (req, res) => {
//   Attractions.delete(req, res);
// });
