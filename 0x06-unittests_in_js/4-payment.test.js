const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub, consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', 100, 20);
  });

  it('should log the correct message with the stubbed result', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 10');
  });
});
