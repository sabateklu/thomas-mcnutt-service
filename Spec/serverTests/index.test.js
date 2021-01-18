const request = require('supertest');
// const {
//   describe, beforeAll, afterAll, expect, test, it,
// } = require('jest');
const server = require('../../Server/index.js');
const { db, dbDisc } = require('../../Database/index.js');

describe('Testing server routes', () => {
  beforeAll(() => {
    db();
  });

  afterAll((done) => {
    dbDisc();
  });

  it('testing to see if Jest works', () => {
    expect(1).toBe(1);
  });

  test('It should response the Get method', () => request(server)
    .get('/')
    .expect(200));
});
