const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function() {
  it('Rounding a up and b down', function() {
    assert.strictEqual(calculateNumber(1.6, 3.3), 5);
  });
  it('Rounding b up', function() {
    assert.strictEqual(calculateNumber(1, 0.5), 2);
  });
  it('Rounding a down and b up', function() {
    assert.strictEqual(calculateNumber(1.4, 3.6), 5);
  });
  it('Rounding a up only', function() {
    assert.strictEqual(calculateNumber(1.5, 3), 5);
  });
  it('Rounding a and b down', function() {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });
});
