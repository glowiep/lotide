const assertArraysEqual = require('../assertArraysEqual');

// Test
console.log("----assertArraysEqualTest----");
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => True
assertArraysEqual([1,[2, 3], [[4]]], [1,[2, 3], [[4]]]); // => True
assertArraysEqual([1,[2, 3], [[4]]], [1, 2, 3, 4]); // => False