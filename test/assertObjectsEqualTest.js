const assertObjectsEqual = require('../assertObjectsEqual');
// Test cases
console.log("----assertObjectsEqualTest----");
const container1 = { a: '1', b: 2 };
const container2 = { b: 2, a: '1' };
assertObjectsEqual(container1, container2); // => pass

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject);   // => pass

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject);  // => fail