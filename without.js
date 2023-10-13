// The without function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!source[i].includes(itemsToRemove)) {
      result.push(source[i]);
    }
  }
};

module.exports = without;

//     Import assertArraysEqual function
// const assertArraysEqual = require('./assertArraysEqual')

//     Test assertions
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case

//     Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);