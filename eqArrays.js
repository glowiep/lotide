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

module.exports = eqArrays;