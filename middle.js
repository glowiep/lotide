// TEST/ASSERTION FUNCTIONS
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

const assertArraysEqual = function(actual, expected) {
  const eqArrays = function(actual, expected) {
    let perfectMatch = false;
    if (actual.length === expected.length && actual.length > 0) {
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] === expected[i]) {
          perfectMatch = true;
        } else {
          perfectMatch = false;
          break;
        }
      }
    } else if (actual.length === expected.length && actual.length === 0 && Array.isArray(actual) === true && Array.isArray(expected) === true) {
      perfectMatch = true;
    }
    return perfectMatch;
  };

  if (eqArrays(actual,expected) === true) {
    console.log(`✅✅✅ Arrays Equal Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Arrays Equal Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const middle = function(arr) {
  let num = arr.length;
  let middle = Math.floor(num / 2);
  let output = [];
  if (num > 2 && num % 2 === 0) {
    output = arr.slice(middle - 1, middle + 1);
  } else if (num > 2 && num % 2 !== 0) {
    output = arr.slice(middle, middle + 1);
  }
  return output;
};

// Assert Test

eqArrays(middle([1, 2, 3, 4, 5]), [3]);
eqArrays(middle([1, 2, 3, 4]), [2, 3]);
eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
eqArrays(middle([1]), []);

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1]), []);

//console.log(middle([1, 2, 3, 4, 5]), "[3]")
//console.log(middle([1, 2, 3, 4]), "[2, 3]")
//console.log(middle([1, 2, 3, 4, 5, 6]), "[3, 4]")