const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')

// Tests
console.log("-----assertArraysEqual tests----")
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => True
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => True
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => True
assertArraysEqual(middle([1]), []); // => True