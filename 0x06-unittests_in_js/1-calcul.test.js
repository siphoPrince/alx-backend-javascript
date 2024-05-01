const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded a and b for SUM', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return the difference of rounded a and b for SUBTRACT', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return the division of rounded a and b for DIVIDE', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return "Error" for division by zero', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should throw an error for invalid operation type', () => {
    assert.throws(() => calculateNumber('INVALID', 1, 2));
  });
});
