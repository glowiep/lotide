// Head function takes in an array and returns the first element in the array.
const head = function(array) {
  return (array.length > 0) ? array[0] : undefined;
};

module.exports = head;
