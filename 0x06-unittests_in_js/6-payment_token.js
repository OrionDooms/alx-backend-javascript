function getPaymentTokenFromAPI(success){
  token = { data: 'Successful response from the API' };
  if (success) {
    return Promise.resolve(token);
  };
};
module.exports = getPaymentTokenFromAPI;
