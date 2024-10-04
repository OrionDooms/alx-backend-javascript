const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function () {

  it('return a resolved promise with data', async function () {
    const response = await getPaymentTokenFromAPI(true);
    expect(response).to.deep.equal({ data: 'Successful response from the API' });
  });
  
  it('return undefined when empty string', async function (){
    const response = await getPaymentTokenFromAPI('');
    expect(response).to.be.undefined
  });

  it('return undefined when false', async function (){
    const response = await getPaymentTokenFromAPI(false);
    expect(response).to.be.undefined
  });
});
