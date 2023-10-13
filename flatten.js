// Function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
const flatten = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Use recuision to handle nested arrays, and merge the flattened nested array with the newArr to be returned
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

module.exports = flatten;