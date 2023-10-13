const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it("returns index 1 for the 'e' in hello", () => {
    assert.deepEqual(letterPositions("hello").e,  [1]);
  });

  it("returns index 3 and 5 for the 'h' in 'lighthouse labs'", () => {
    assert.deepEqual(letterPositions("lighthouse labs").h, [3, 5]);
  });

  it("returns index 8 and 14 for the 's' in 'lighthouse labs'", () => {
    assert.deepEqual(letterPositions("lighthouse labs").s, [8, 14]);
  });

});
