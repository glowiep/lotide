// Function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

const results1 = map(words, word => word[0]);
console.log(results1);

const assertArraysEqual = function(arr1, arr2) {
  const eqArrays = function(arr1, arr2) {
    if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        let perfectMatch = false;
        if (arr1[i] === arr2[i]) {
          perfectMatch = true;
        } else {
          perfectMatch = false;
          break;
        }
        return perfectMatch;
      }
    }
  };

  if (eqArrays(arr1,arr2) === true) {
    console.log(`✅✅✅ Arrays Equal Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Arrays Equal Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);