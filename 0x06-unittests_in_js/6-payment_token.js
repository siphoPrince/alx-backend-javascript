const getPaymentTokenFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // If not successful, do nothing
      resolve();
    }
  });
};

module.exports = getPaymentTokenFromAPI;
