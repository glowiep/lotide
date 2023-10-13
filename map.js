// Function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;