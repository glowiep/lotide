const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const object1 = { a: { z: 1 }, b: 2 };
const object2 = { a: { z: 1 }, b: 2 };

const object3 = { a: { z: 2 }, b: 2 };
const object4 = { a: { z: 1 }, b: 2 };

const object5 = { a: { y: { c: 0, d: { e: 0, f: 1 } }, z: 1 }, b: 2 };
const object6 = { a: { y: { c: 0, d: { e: 0, f: 1 } }, z: 1 }, b: 2 };

const object7 = { a: [ 0, [1, 2, [3]] ], b: 2 };
const object8 = { a: [ 0, [1, 2, [3]] ], b: 2 };

const object9 =  { a:  {c: 3, d: {e: 5}, f: [0, [6]] }, b: 2 };
const object10 = { a:  {c: 3, d: {e: 5}, f: [0, [6]] }, b: 2 };

const object11 = { a:  {c: 3, d: {e: 5}, f: [0, [6]] }, b: 2 };
const object12 = { a:  {c: 3, d: {e: 5}, f: [0, [7]] }, b: 2 };

const object13 = { a: { y: 0, z: 1 }, b: 2 };
const object14 = { a: { z: 1 }, b: 2 };

const object15 = { a:  {c: 3, d: {e: 5}, f: [0, [6, {z: 5}]] }, b: 2 };
const object16 = { a:  {c: 3, d: {e: 5}, f: [0, [7, {z: 5}]] }, b: 2 };

describe('#eqObjects', () => {
  it("should return TRUE when the same key has an identical object nested within the object", () => {
    assert.isTrue(eqObjects(object1, object2));
  });

  it("should return FALSE when the same key in both objects have different values", () => {
    assert.isFalse(eqObjects(object3, object4));
  });

  it("should return TRUE when comparing identical objects with multiple nested objects", () => {
    assert.isTrue(eqObjects(object5, object6));
  });

  it("should return TRUE if the same key in both objects has identical nested arrays", () => {
    assert.isTrue(eqObjects(object7, object8));
  });

  it("should return TRUE if the same key in both objects has identical nested arrays within objects", () => {
    assert.isTrue(eqObjects(object9, object10));
  });

  it("should return FALSE if the same key in both objects does NOT have identical nested arrays within objects", () => {
    assert.isFalse(eqObjects(object11, object12));
  });

  it("should return FALSE if the object within an object does not have the same number of values as the other", () => {
    assert.isFalse(eqObjects(object13, object14));
  });

  it("does not support checking nested object within a nested array", () => {
    assert.isFalse(eqObjects(object15, object16));
  });
});
