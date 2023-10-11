const assertEqual = require('../assertEqual');

// Tests
assertEqual(1, 1); // => pass
assertEqual("Lighthouse Labs", "Bootcamp"); // => fail
assertEqual("one", 1); // => fail
assertEqual("String", "string"); // => fail
assertEqual("1", 1); // => fail
assertEqual([0, 1], [0, 1]); // => fail