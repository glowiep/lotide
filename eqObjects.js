// Function that takes in 2 objects and return true if they are equal and false otherwise.
// Import required eqArrays function
const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;