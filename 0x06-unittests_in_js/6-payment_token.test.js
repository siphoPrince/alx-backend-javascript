const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with success message when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).toEqual({ data: 'Successful response from the API' });
        done(); // Signal test completion after assertions
      })
      .catch((error) => {
        fail('Unexpected error:', error);
        done(); // Signal test completion even on error
      });
  });

  it('should reject with error message when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((data) => {
        fail('Unexpected success');
        done(); // Signal test completion even on success
      })
      .catch((error) => {
        expect(error.message).toBe('API call failed');
        done(); // Signal test completion after assertion
      });
  });
});

