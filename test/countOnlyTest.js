const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly (see inputs for tests in countOnlyTest.js file)', () => {
  it("returns 1 count for 'Jason'", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("returns 2 counts for 'Fang'", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it("returns undefined for 'Karima'", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("returns undefined for 'Agouhanna'", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });

});