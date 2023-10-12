const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function that takes in a sentence and returns a count of each of the letters in the sentence.
const countLetters = function(word) {
  word = word.toLowerCase().split(" ").join("");
  let result = {};
  for (const alphabet of word) {
    if (result[alphabet]) {
      result[alphabet] += 1;
    } else {
      result[alphabet] = 1;
    }
  }
  return result;
};

module.exports = countLetters;

const resultTest = countLetters("lighthouse in the house");
console.log(resultTest);
assertEqual(resultTest["h"], 4);