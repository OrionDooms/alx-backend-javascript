const calculateNumber = require('./2-calcul_chai');
const { expect } = require('chai');

describe('calculateNumber', function() {
  describe('DIVIDE type', function(){
    it('DIVIDE', function() {
      expect(calculateNumber('DIVIDE', 15, 5)).to.equal(3);
    });
    it('DIVIDE', function() {
      expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
    });
    it('DIVIDE', function() {
      expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
    });
    it('DIVIDE', function() {
      expect(calculateNumber('DIVIDE', 7.5, 0)).to.equal('Error');
    });
  });

  describe('SUM type', function(){
    it('SUM', function() {
      expect(calculateNumber('SUM', 1.7, 3.3)).to.equal(5);
    });
    it('SUM', function() {
      expect(calculateNumber('SUM', 3.5, 3.5)).to.equal(8);
    });
  });

  describe('SUBTRACT type', function(){
    it('SUBTRACT', function() {
      expect(calculateNumber('SUBTRACT', 13.8, 6.8)).to.equal(7);
    });
    it('SUBTRACT', function() {
      expect(calculateNumber('SUBTRACT', 9, 6)).to.equal(3);
    });
  });
});
