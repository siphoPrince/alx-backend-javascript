const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call the stubbed calculateNumber with correct arguments', () => {
    const calculateNumberStub = sinon.stub(utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    chai.expect(calculateNumberStub.calledOnce).to.be.true;
    chai.expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    chai.expect(consoleLogSpy.calledOnce).to.be.true;
    chai.expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

    // Restore the stub and spy after the test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
