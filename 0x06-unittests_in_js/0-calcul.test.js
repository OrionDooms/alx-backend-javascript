const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function() {
	it('Round down both a and b', function() {
	assert.strictEqual(calculateNumber(1.6, 3.3), 5);
	});
	it('Round down b only', function() {
        assert.strictEqual(calculateNumber(1, 0.5), 2);
        });
	it('Round down both a and b', function() {
        assert.strictEqual(calculateNumber(1.4, 3.6), 5);
        });
	it('Round down a only', function() {
        assert.strictEqual(calculateNumber(1.5, 3), 5);
        });
	it('Round down both a and b', function() {
        assert.strictEqual(calculateNumber(0.1, 0.3), 0);
        });
});
