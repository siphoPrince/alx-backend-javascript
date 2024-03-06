function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Sample response from API');
    }, 2000);
  });
}

export default getResponseFromAPI;
