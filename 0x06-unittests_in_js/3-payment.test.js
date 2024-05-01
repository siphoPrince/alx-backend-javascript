const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    const calculateNumberSpy = sinon.spy(utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    chai.expect(calculateNumberSpy.calledOnce).to.be.true;
    chai.expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    // Remember to restore the spy after the test
    calculateNumberSpy.restore();
  });
});
