const Utils = {
  calculateNumber: (type, a, b) => {
    if (type === 'SUM') {
      return a + b;
    } else if (type === 'SUBTRACT') {
      return a - b;
    } else if (type === 'MULTIPLY') {
      return a * b;
    } else {
      throw new Error('Invalid type');
    }
  }
};

module.exports = Utils;
