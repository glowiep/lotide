const tail = function(array) {
  let finalArray = [];
  if (array.length <= 1) {
    return finalArray;
  } else {
    return array.slice(1);
  }
};

module.exports = tail;