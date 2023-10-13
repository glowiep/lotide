// Function that prints an appropriate message after comparing the two arrays.
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`✅✅✅ Arrays Equal Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Arrays Equal Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;

// Test
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => True
assertArraysEqual([1,[2, 3], [[4]]], [1,[2, 3], [[4]]]); // => True
assertArraysEqual([1,[2, 3], [[4]]], [1, 2, 3, 4]); // => False