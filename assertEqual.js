const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(1, 1); // => pass
assertEqual("Lighthouse Labs", "Bootcamp"); // => fail
assertEqual("one", 1); // => fail
assertEqual("String", "string"); // => fail
assertEqual("1", 1); // => fail

assertEqual([0, 1], [0, 1]);