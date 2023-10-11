const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test assertions
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false

console.log("-----------");
assertEqual(eqArrays([1, [2, [3]]], [1, [2, [3]]]), true); // True
assertEqual(eqArrays([1, [2, [3]]], [1, [2, 3]]), false); // False
assertEqual(eqArrays([[], [], [[[3, [4, 5, [6]]]]]], [[], [], [[[3, [4, 5, [6]]]]]]), true); // True
assertEqual(eqArrays([[], [], [[[3, [4, 5, 6]]]]], [[], [], [[[3, [4, 5, [6]]]]]]), false); // False
assertEqual(eqArrays([[], [], [[]]], [[], [], [[]]]), true); // True
assertEqual(eqArrays([[], [], [[]]], [[], [], []]), false); // False
console.log("-----------");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // True
assertEqual(eqArrays(["1", "a", 3], ["1", "a", 3]), true); // True
assertEqual(eqArrays([null, [], 0], [null, [], 0]), true); // True
assertEqual(eqArrays([undefined, false], [undefined, false]), true); // True