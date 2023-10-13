// Import assertArraysEqual function
const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');
// Test assertions
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => true