const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  const keysArray = Object.keys(object);
  for (const key of keysArray) {
    if (object[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);

/*
const findKeyByValue = function(object, value) {
  const keyValueArray = Object.entries(object);
  for (let i = 0; i < keyValueArray.length; i++) {
    for (let val = 0; val < keyValueArray[i].length; val++) {
      if (keyValueArray[i][val] === value) {
        return keyValueArray[i][0];
      }
    }
  }
}
*/