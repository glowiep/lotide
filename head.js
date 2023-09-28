const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + [actual] + " === " + [expected]);
  }
  else {
    console.log("🛑🛑🛑 Assertion Failed: " + [actual] + " !== " + [expected]);
  }
};


// Create a function head which returns the first item in the array.
const head = function(array) {
  return (array.length > 0) ? array[0] : undefined;
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);