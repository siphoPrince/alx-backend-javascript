const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  it('should return the sum of rounded a and b for SUM', () => {
    chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should return the difference of rounded a and b for SUBTRACT', () => {
    chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return the division of rounded a and b for DIVIDE', () => {
    chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return "Error" for division by zero', () => {
    chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should throw an error for invalid operation type', () => {
    chai.expect(() => calculateNumber('INVALID', 1, 2)).to.throw();
  });
});
