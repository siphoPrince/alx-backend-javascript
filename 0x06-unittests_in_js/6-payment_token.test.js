const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with success message', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).toEqual({ data: 'Successful response from the API' });
        done(); // Call done to indicate the completion of the test
      })
      .catch((error) => {
        done(error); // Call done with error if promise is rejected
      });
  });
});
