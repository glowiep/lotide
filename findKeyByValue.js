// Function that takes in an object and a value and returns the first key that corresponds to that value.
const findKeyByValue = function(object, value) {
  const keysArray = Object.keys(object);
  for (const key of keysArray) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;