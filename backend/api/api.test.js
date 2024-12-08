// tests/api.test.js

const request = require('supertest');
const app = require('../api/index'); // Adjust the path as needed

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('swiftshop Backend API');
  });
});
