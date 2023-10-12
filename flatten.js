
// Function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
const flatten = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

module.exports = flatten;

// Assert Testing
const assertArraysEqual = function(flattened, expected) {
  const eqArrays = function(flattened, expected) {
    if (flattened.length === expected.length) {
      for (let i = 0; i < flattened.length; i++) {
        let perfectMatch = false;
        if (flattened[i] === expected[i]) {
          perfectMatch = true;
        } else {
          perfectMatch = false;
          break;
        }
        return perfectMatch;
      }
    }
  };

  if (eqArrays(flattened, expected) === true) {
    console.log(`✅✅✅ Arrays Equal Assertion Passed: ${flattened} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Arrays Equal Assertion Failed: ${flattened} !== ${expected}`);
  }
};

// Assert test:
let flattened = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flattened, [1, 2, 3, 4, 5, 6]);