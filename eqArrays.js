const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // True
assertEqual(eqArrays(["1", "a", 3], ["1", "a", 3]), true); // True
assertEqual(eqArrays([null, [], 0], [null, [], 0]), true); // True
assertEqual(eqArrays([undefined, false], [undefined, false]), true); // True
