const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  test('should return a resolved promise with successful response from API', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).toEqual({ data: 'Successful response from the API' });
        done()
      })
      .catch((error) => done(error));
  });
});
