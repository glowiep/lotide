// Function that takes in a sentence and returns a count of each of the letters in the sentence.
const countLetters = function(sentence) {
  sentence = sentence.toLowerCase().split(" ").join("");
  let result = {};
  for (const alphabet of sentence) {
    if (result[alphabet]) {
      result[alphabet] += 1;
    } else {
      result[alphabet] = 1;
    }
  }
  return result;
};

module.exports = countLetters;