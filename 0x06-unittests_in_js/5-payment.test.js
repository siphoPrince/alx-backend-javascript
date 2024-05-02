const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log the correct message with total 120 and called once', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');
    sinon.assert.calledOnce(consoleLogSpy);
  });

  it('should log the correct message with total 20 and called once', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 20');
    sinon.assert.calledOnce(consoleLogSpy);
  });
});
