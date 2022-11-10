// tests/user.test.js
const items = require('./bulkItem');
// npm i --save-dev supertest
const request = require('supertest');
const { createApp } = require('../app');
const database = require('../models/database');

describe('상품 생성', () => {
  const app = createApp();

  beforeAll(async () => {
    await database.initialize();
    // eslint-disable-next-line
    console.log(`beforeAll`);
  });

  afterAll(async () => {
    // eslint-disable-next-line
    console.log(`afterAll`);
  });

  items.forEach(item => {
    test('상품 생성', async () => {
      await request(app)
        .post('/products')
        .send(item)
        .expect(201);
    });
  });
});
