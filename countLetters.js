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

// Test
// const assertEqual = require('./assertEqual');
// const resultTest = countLetters("lighthouse in the house");
// console.log(resultTest);
// assertEqual(resultTest["h"], 4);