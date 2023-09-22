const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!source[i].includes(itemsToRemove)) {
      result.push(source[i]);
    }
  }
};

const assertArraysEqual = function(source, result) {
  const eqArrays = function(source, result) {
    if (source.length === result.length) {
      for (let i = 0; i < source.length; i++) {
        let perfectMatch = false;
        if (source[i] === result[i]) {
          perfectMatch = true;
        } else {
          perfectMatch = false;
          break;
        }
        return perfectMatch;
      }
    }
  };

  if (eqArrays(source, result) === true) {
    console.log(`✅✅✅ Arrays Equal Assertion Passed: ${source} === ${result}`);
  } else {
    console.log(`🛑🛑🛑 Arrays Equal Assertion Failed: ${source} !== ${result}`);
  }
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);