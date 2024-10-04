const Utils = require('./utils');

function sendPaymentRequestToApi(Amount, Shipping) {
  const total = Utils.calculateNumber('SUM', Amount, Shipping);
  console.log(`The total is: ` + total);
};
module.exports = sendPaymentRequestToApi;
