const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("Tests calculateNumber function:", function() {
  describe("Calculates two integers:", function() {
    it('Returns 6 for SUM', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('Returns -4 for SUBTRACT', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('Returns 0.2 for DIVIDE', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });

  describe("Calculates one float & one integer:", function() {
    it('Returns -3 for SUBTRACT', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 4), -3);
    });
  });

  describe("Calculates one float & one integer (round down):", function() {
    it('Returns 4 for SUM', function() {
      assert.strictEqual(calculateNumber('SUM', 1.3, 2.7), 4);
    });
  });

  describe("Calculates one float & one int reversed:", function() {
    it('Returns 3 for SUBTRACT', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.2, 1), 3);
    });
  });

  describe("Calculates two floats:", function() {
    it('Returns 6 for SUM', function() {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.5), 6);
    });

    it('Returns -2 for SUBTRACT', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.5), -2);
    });
  });
});
