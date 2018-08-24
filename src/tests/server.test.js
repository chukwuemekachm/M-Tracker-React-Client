import request from 'supertest';
import app from '../../index';

describe('Test the server', () => {
  it('it should return the index.html file', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
