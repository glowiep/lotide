// Function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

/*
// Test
const words = ["ground", "control", "to", "major", "tom"];
// Import assertArraysEqual function 
const assertArraysEqual = require('./assertArraysEqual')

const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
*/