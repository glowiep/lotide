// Function that takes in an object and callback and returns the first key that meets the criteria specified in callback.
const findKey = function(object, callback) {
  const keysArray = Object.keys(object);
  for (let key of keysArray) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;