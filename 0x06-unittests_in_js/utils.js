const Utils = {
  calculateNumber(type, a, b) {
    if (type == "SUM") {
      return Math.round(a) + Math.round(b);
    }
    if (type === "SUBTRACT") {
      return Math.round(b) - Math.round(a);
    }
    if (type === "DIVIDE") {
      if (Math.round(b) === 0) {
        return "Error";
      } else {
        return Math.round(a) / Math.round(b);
      }
    }
  },
};

module.exports = Utils;
