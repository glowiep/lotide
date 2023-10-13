const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it("returns TRUE when comparing identical arrays containing number and strings", () => {
    assert.isTrue(eqArrays(["1", "a", 3], ["1", "a", 3]));
  });

  it("returns TRUE when comparing identical nested arrays", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

  it("returns TRUE true when comparing identical arrays with null and undefined values", () => {
    assert.isTrue(eqArrays([null, [], undefined, 0], [null, [], undefined, 0]));
  });

  it("returns FALSE when comparing similar arrays containing elements with the same values, but different order", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 1, 2]));
  });

  it("returns FALSE when comparing non-identical nested arrays with the same values", () => {
    assert.isFalse(eqArrays([1, [2, [3]]], [1, [2, 3]]));
  });
});