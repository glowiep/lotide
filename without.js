// The without function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!source[i].includes(itemsToRemove)) {
      result.push(source[i]);
    }
  }
};

module.exports = without;