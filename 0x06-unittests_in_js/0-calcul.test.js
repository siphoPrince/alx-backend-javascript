const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded a and b', () => {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle decimals correctly', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
});
