const middle = function(arr) {
  let num = arr.length;
  let middle = Math.floor(num / 2);
  let output = [];
  if (num > 2 && num % 2 === 0) {
    output = arr.slice(middle - 1, middle + 1);
  } else if (num > 2 && num % 2 !== 0) {
    output = arr.slice(middle, middle + 1);
  }
  return output;
};

module.exports = middle;