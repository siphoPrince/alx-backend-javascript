const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;
const { Utils } = require('./utils'); // Import the Utils module
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('Should use Utils.calculateNumber with correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnceWith('SUM', 100, 20)).to.be.true;

    calculateNumberSpy.restore();
  });
});
