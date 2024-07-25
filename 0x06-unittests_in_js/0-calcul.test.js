const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("Tests calculateNumber function:", function() {
    describe("Calculates two integers:", function() {
        it('Returns 4.', function() {
            assert.strictEqual(calculateNumber(2, 2), 4);
        });
    });
    describe("Calculates one float & one integer:", function() {
        it('Returns 5.', function() {
            assert.strictEqual(calculateNumber(1, 4.2), 5);
        });
    });
    describe("Calculates one float & one integer (round down):", function() {
        it('Returns 4.', function() {
            assert.strictEqual(calculateNumber(1, 3.2), 4);
        });
    });
    describe("Calculates one float & one int reversed:", function () {
        it('Returns 5.', function () {
            assert.strictEqual(calculateNumber(4.2, 1), 5);
        });
    });
    describe("Calculates two floats:", function() {
        it('Returns 5.', function() {
            assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        });
    });
    describe("Calculates two floats w/borderline:", function() {
        it('Returns 6.', function() {
            assert.strictEqual(calculateNumber(1.5, 3.7), 6);
        });
    });
    describe("Calculates two negative integers:", function() {
        it('Returns -6.', function() {
            assert.strictEqual(calculateNumber(-3, -3), -6);
        });
    });
    describe("Calculates one negative float & one positive integer:", function() {
        it('Returns 3.', function() {
            assert.strictEqual(calculateNumber(-1.7, 5), 3);
        });
    });
    describe("Calculates two zero values:", function() {
        it('Returns 0.', function() {
            assert.strictEqual(calculateNumber(0, 0), 0);
        });
    });
    describe("Calculates one zero value & one integer:", function() {
        it('Returns 5.', function() {
            assert.strictEqual(calculateNumber(0, 5), 5);
        });
    });
});
