const Utils = {
  calculateNumber: function (type, a, b) {
    const B = Math.round(b);
    const A = Math.round(a);

    if (type === 'SUBTRACT') {
      return A - B;
    }
    else if (type === 'SUM') {
      return A + B;
    }
    else if (type === 'DIVIDE') {
      if (B === 0) {
        return 'Error';
      }
      return A / B;
    }
  }
};
module.exports = Utils;
