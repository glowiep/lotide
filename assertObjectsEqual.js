// eqArrays function
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

// eqObjects function
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length === object2Keys.length) {
    for (let key of object1Keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        eqArrays(object1Keys, object2Keys);
      } else if (object1[key] === object2[key]) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

// Takes in 2 objects and asserts whether two arrays are equal.
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assert Objects Equal Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assert Objects Equal Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

  
};

// Test cases
const container1 = { a: '1', b: 2 };
const container2 = { b: 2, a: '1' };
assertObjectsEqual(container1, container2); // => pass

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject);   // => pass

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject);  // => fail

