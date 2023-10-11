const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual')
const tail = require('../tail');
// Tests: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log("Using assertEqual:");
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

console.log("\nUsing assertArraysEqual:");
assertArraysEqual(tail([1, "Hello", "Lighthouse", "Labs"]), ["Hello", "Lighthouse", "Labs"])
// Empty array or one element as input to tail function should return an empty array
assertArraysEqual(tail([]), []);
assertArraysEqual(tail(["One"]), []);
