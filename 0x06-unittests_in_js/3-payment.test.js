const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  afterEach(function(){
    sinon.restore();
  });

  it('SUM -10, -5', function (){
    const Spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(-10, -5);
    expect(Spy.calledOnceWithExactly('SUM', -10, -5)).to.be.true;
  });

  it('SUM 100, 20', function (){
    const Spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(Spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('SUM 10, 5', function (){
    const Spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(10, 5);
    expect(Spy.calledOnceWithExactly('SUM', 10, 5)).to.be.true;
  });
});
