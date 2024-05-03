const chai = require('chai');
const request = require('request');

const { expect } = chai;

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request('http://localhost:7865/', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
