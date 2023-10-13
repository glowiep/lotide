const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('#findKeyByValue (see inputs for test in findKeyByValueTest.js file)', () => {
  it("returns 'drama' for 'The Wire'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns 'sci_fi' for 'The Expanse'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });

  it("returns undefined for 'That '70s Show'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("returns undefined for ''", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);
  });

});
