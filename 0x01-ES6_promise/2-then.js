function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      console.error('Got a response from the API');
      return new Error();
    });
}

export default handleResponseFromAPI;
