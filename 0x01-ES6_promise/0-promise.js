function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('True');
    } else {
      reject(Error('false'));
    }
  });
}
export default getResponseFromAPI;
