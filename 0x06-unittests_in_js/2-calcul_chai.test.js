const calculateNumber = require('./2-calcul_chai');
const assert = require('chai');

describe('calculateNumber', function() {
  it('SUM', function() {
    assert.strictEqual(calculateNumber('SUM', 1.7, 3.3), 5);
  });
  it('DIVIDE', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 15, 5), 3);
  });
  it('SUBTRACT', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 13.8, 6.8), 7);
  });
  it('DIVIDE', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0), 'Error');
  });
  it('SUM', function() {
    assert.strictEqual(calculateNumber('SUM', 3.5, 3.5), 8);
  });
  it('DIVIDE', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 5), 2);
  });
  it('SUBTRACT', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 9, 6), 3);
  });
  it('DIVIDE', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 7.5, 0), 'Error');
  });
});
