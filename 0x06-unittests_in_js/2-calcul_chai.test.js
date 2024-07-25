var chai = require('chai');
var expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe("Tests calculateNumber function:", function() {
  describe("Calculates two integers:", function() {
    it('Returns 6 for SUM', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('Returns -4 for SUBTRACT', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('Returns 0.2 for DIVIDE', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });

  describe("Calculates one float & one integer:", function() {
    it('Returns -3 for SUBTRACT', function() {
      expect(calculateNumber('SUBTRACT', 1.2, 4)).to.equal(-3);
    });
  });

  describe("Calculates one float & one integer (round down):", function() {
    it('Returns 4 for SUM', function() {
      expect(calculateNumber('SUM', 1.3, 2.7)).to.equal(4);
    });
  });

  describe("Calculates one float & one int reversed:", function() {
    it('Returns 3 for SUBTRACT', function() {
      expect(calculateNumber('SUBTRACT', 4.2, 1)).to.equal(3);
    });
  });

  describe("Calculates two floats:", function() {
    it('Returns 6 for SUM', function() {
      expect(calculateNumber('SUM', 2.4, 3.6)).to.equal(6);
    });

    it('Returns -2 for SUBTRACT', function() {
      expect(calculateNumber('SUBTRACT', 2.4, 4.4)).to.equal(-2);
    });
  });
});
