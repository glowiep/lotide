// Function that takes in a collection of items and returns a specific subset of those items.
const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (const item of allItems) {
    if (results[item] && itemsToCount[item] === true) {
      results[item] += 1;
    } else if (itemsToCount[item] === true) {
      results[item] = 1;
    }
  }
  return results;
};

module.exports = countOnly;