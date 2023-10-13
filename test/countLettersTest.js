const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it("returns 4 for 'h' in 'lighthouse in the house'", () => {
    assert.strictEqual(countLetters("lighthouse in the house")["h"], 4);
  });

  it("returns 1 for 'n' in 'lighthouse in the house'", () => {
    assert.strictEqual(countLetters("lighthouse in the house")["n"], 1);
  });
  
  it("returns 2 for 's' in 'lighthouse in the house'", () => {
    assert.strictEqual(countLetters("lighthouse in the house")["s"], 2);
  });
});


// Test Assertions (old)
// const assertEqual = require('./assertEqual');
// const resultTest = countLetters("lighthouse in the house");
// console.log(resultTest);
// assertEqual(resultTest["h"], 4);