// Function that takes in a string and returns all indices of letter positions in the string.
const letterPositions = function(sentence) {
  const results = {};
  // iterate over the indexes starting at index 0
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    // If the character in the sentence
    if (results[char]) {
      results[char].push(i);
    } else {
      results[char] = [i];
    }
  }
  delete results[' '];
  return results;
};

module.exports = letterPositions;