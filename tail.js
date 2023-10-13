// Function that takes in an array and returns everything except the first element of the array.
const tail = function(array) {
  return (array.length > 1) ? array.slice(1) : [];
};

module.exports = tail;