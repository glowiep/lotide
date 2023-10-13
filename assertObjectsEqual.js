// Import the eqObjects function
const eqObjects = require('./eqObjects');

// Takes in 2 objects and asserts whether two arrays are equal.
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assert Objects Equal Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assert Objects Equal Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// // Test cases
// const container1 = { a: '1', b: 2 };
// const container2 = { b: 2, a: '1' };
// assertObjectsEqual(container1, container2); // => pass

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject);   // => pass

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject);  // => fail

