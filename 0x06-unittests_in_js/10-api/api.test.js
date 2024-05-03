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

describe('Cart page', () => {
  it('Correct status code when :id is a number?', (done) => {
    request('http://localhost:7865/cart/12', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
    request('http://localhost:7865/cart/hello', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('Correct response when :id is a number?', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Correct error message when :id is NOT a number?', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(body).to.equal('Invalid cart ID');
      done();
    });
  });
});

describe('/login endpoint', () => {
  it('Correct status code when no username provided?', (done) => {
    request.post('http://localhost:7865/login', (error, response) => {
      expect(response.statusCode).to.equal(400);
      done();
    });
  });

  it('Correct response when username provided?', (done) => {
    request
      .post('http://localhost:7865/login', {
        json: { userName: 'Alice' },
      })
      .end((error, response, body) => {
        expect(body).to.equal('Welcome Alice');
        done();
      });
  });
});

describe('/available_payments endpoint', () => {
  it('Correct status code and response structure?', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

