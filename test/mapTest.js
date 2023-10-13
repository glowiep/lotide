const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');
//   Test
const words = ["ground", "control", "to", "major", "tom"];

// Import assertArraysEqual function 
console.log("----mapTest----");
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);