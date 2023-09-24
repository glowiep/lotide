const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
  word = word.split(" ").join("");
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

const resultTest = countLetters("lighthouse in the house");
console.log(resultTest);
assertEqual(resultTest["h"], 4);