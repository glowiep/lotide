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
  }
  else {
    console.log(`🛑🛑🛑 Arrays Equal Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);

/* Add in 
 else if (actual.length === expected.length && actual.length === 0 && Array.isArray(actual) === true && Array.isArray(expected) === true) {
      perfectMatch = true;
    }
*/