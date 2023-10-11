// Create a function head which returns the first item in the array.
const head = function(array) {
  return (array.length > 0) ? array[0] : undefined;
};

module.exports = head;
