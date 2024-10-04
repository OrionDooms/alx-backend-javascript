const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let result, cal;

  beforeEach(function() {
    cal = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    result = sinon.spy(console, 'log');
  });

  afterEach(function() {
    sinon.restore();
  });

  it('SUM, 1.7, 3.3', function () {
    sendPaymentRequestToApi(1.7, 3.3);
    expect(cal.calledOnceWithExactly('SUM', 1.7, 3.3)).to.be.true;
  });

  it('SUM -10, -5', function () {    
    sendPaymentRequestToApi(-10, -5);
    expect(cal.calledOnceWithExactly('SUM', -10, -5)).to.be.true;
  });

  it('SUM, 13.8, 6.8', function () {
    sendPaymentRequestToApi(13.8, 6.8);
    expect(cal.calledOnceWithExactly('SUM', 13.8, 6.8)).to.be.true;
  });
});
