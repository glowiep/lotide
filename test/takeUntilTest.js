const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

describe('#takeUntil', () => {
  it("returns the values before '-1' in [1, 2, 5, 7, 2, -1, 2, 4, 5] when specified to take until the value is less than 0", () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });

  it("returns an array with all the elements before the comma in [ 'I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'] ", () => {
    assert.deepEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });

});
