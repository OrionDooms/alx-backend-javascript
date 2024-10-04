const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let result;

  beforeEach(function () {
    result = sinon.spy(console, 'log');
  });

  afterEach(function () {
    sinon.restore();
  });

  it('SUM, 1.7, 3.3', function () {
    sendPaymentRequestToApi(1.7, 3.3);
    expect(result.calledWithExactly('The total is: 5')).to.be.true;
  });

  it('SUM -10, -5', function () {
    sendPaymentRequestToApi(-10, -5);
    expect(result.calledWithExactly('The total is: -15')).to.be.true;
  });

  it('SUM, 13.8, 6.2', function () {
    sendPaymentRequestToApi(13.8, 6.2);
    expect(result.calledWithExactly('The total is: 20')).to.be.true;
  });
});
