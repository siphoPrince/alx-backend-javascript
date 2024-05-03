function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // Simulate an error for testing
      reject(new Error('API call failed'));
    }
  });
}
