// Used recursion to allow eqArrays to support sub-arrays
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

// Used recursion to allow eqObjects to support nested objects
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  // Return FALSE if the number of keys are different
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let key of object1Keys) {
    // If the value is an array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      const result = eqArrays(object1[key], object2[key]);
      // If it fails the eqArrays check, return FALSE. If it passes, it will continue the checks
      if (!result) {
        return false;
      }
    } else if (!Array.isArray(object1[key]) && !Array.isArray(object2[key]) && typeof object1[key] === "object" && typeof object2[key] === "object") {
      const result = eqObjects(object1[key], object2[key]);
      // If it fails the eqObjects check, return FALSE. If it passes, it will continue the checks
      if (!result) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false; // If the values are not array or objects, and are not equal - return FALSE.
    }
  }
  // All else return TRUE
  return true;
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test Assertions
// should return TRUE when the same key has an identical object nested within the object
const object1 = { a: { z: 1 }, b: 2 };
const object2 = { a: { z: 1 }, b: 2 };
assertEqual(eqObjects(object1, object2), true); // True

// should return FALSE when the same key in both objects have different values
const object3 = { a: { z: 2 }, b: 2 };
const object4 = { a: { z: 1 }, b: 2 };
assertEqual(eqObjects(object3, object4), false); // False

// should return TRUE when comparing identical objects with multiple nested objects
const object5 = { a: { y: { c: 0, d: { e: 0, f: 1 } }, z: 1 }, b: 2 };
const object6 = { a: { y: { c: 0, d: { e: 0, f: 1 } }, z: 1 }, b: 2 };
assertEqual(eqObjects(object5, object6), true); // True

// should return TRUE if the same key in both objects has identical nested arrays
const object7 = { a: [ 0, [1, 2, [3]] ], b: 2 };
const object8 = { a: [ 0, [1, 2, [3]] ], b: 2 };
assertEqual(eqObjects(object7, object8), true); // True

// should return TRUE if the same key in both objects has identical nested arrays within objects
const object9 =  { a:  {c: 3, d: {e: 5}, f: [0, [6]] }, b: 2 };
const object10 = { a:  {c: 3, d: {e: 5}, f: [0, [6]] }, b: 2 };
assertEqual(eqObjects(object9, object10), true); // True

// should return FALSE if the same key in both objects does NOT have identical nested arrays within objects
const object11 = { a:  {c: 3, d: {e: 5}, f: [0, [6]] }, b: 2 };
const object12 = { a:  {c: 3, d: {e: 5}, f: [0, [7]] }, b: 2 };
assertEqual(eqObjects(object11, object12), false); // False

// should return FALSE if the object within an object does not have the same number of values as the other
const object13 = { a: { y: 0, z: 1 }, b: 2 };
const object14 = { a: { z: 1 }, b: 2 };
assertEqual(eqObjects(object13, object14), false); // false

// Does not support checking nested object in nested array 
const object15 = { a:  {c: 3, d: {e: 5}, f: [0, [6, {z: 5}]] }, b: 2 };
const object16 = { a:  {c: 3, d: {e: 5}, f: [0, [7, {z: 5}]] }, b: 2 };
assertEqual(eqObjects(object15, object16), false); // False