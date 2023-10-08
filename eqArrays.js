const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  // Return FALSE if array lenghts are not equal
  if (arr1.length !== arr2.length) {
    return false;
  }

  // If array lengths are equal, iterate over items in array
  for (let i = 0; i < arr1.length; i++) {
    // Recursive case to support sub-arrays check
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      const result = eqArrays(arr1[i], arr2[i]);
      // Return FALSE if it fails the eqArrays check
      if (!result) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false; // Return FALSE if the array values are not equal
    }
  }
  return true;
  
};

// Test assertions
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false

console.log("-----------");
assertEqual(eqArrays([1, [2, [3]]], [1, [2, [3]]]), true); // True
assertEqual(eqArrays([1, [2, [3]]], [1, [2, 3]]), false); // False
assertEqual(eqArrays([[], [], [[[3, [4, 5, [6]]]]]], [[], [], [[[3, [4, 5, [6]]]]]]), true); // True
assertEqual(eqArrays([[], [], [[[3, [4, 5, 6]]]]], [[], [], [[[3, [4, 5, [6]]]]]]), false); // False
assertEqual(eqArrays([[], [], [[]]], [[], [], [[]]]), true); // True
assertEqual(eqArrays([[], [], [[]]], [[], [], []]), false); // False
console.log("-----------");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // True
assertEqual(eqArrays(["1", "a", 3], ["1", "a", 3]), true); // True
assertEqual(eqArrays([null, [], 0], [null, [], 0]), true); // True
assertEqual(eqArrays([undefined, false], [undefined, false]), true); // True