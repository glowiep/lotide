# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @glowiep/lotide`

**Require it:**

`const _ = require('@glowiep/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Takes in 2 arrays and asserts whether two arrays are equal.
* `assertEqual(actual, expected)`: Takes in 2 values and returns true if they are equal and false otherwise.
* `assertObjectsEqual(actual, expected)`: Takes in 2 objects and asserts whether two arrays are equal.
* `countLetters(sentence)`: Takes in a sentence (string) and returns a count of each of the letters in the sentence. 
* `countOnly(allItems, itemsToCount)`: Takes in a collection of items and returns a specific subset of those items.
* `eqArrays(array1, array2)`: Takes in 2 arrays and returns true if the arrays are equal and false otherwise.
* `eqObjects(object1, object2)`: Takes in 2 objects and return true if they are equal and false otherwise.
* `findKey(object, callback)`: Takes in an object and callback and returns the first key that meets the criteria specified in callback.
* `findKeyByValue`: Takes in an object and a value and returns the first key that corresponds to that value.
* `flatten(array)`: Takes in an array that contains elements including nested array of elements, and returns a flattened version of the array.
* `head(array)`: Returns the first element in the array.
* `letterPositions(sentence)`: Returns all indices of letter positions in the sentence (string).
* `map(array, callback)`: Returns a new array based on the results of the callback on each item in the array.
* `middle(array)`: Returns middle most element of the array.
* `tail(array)`: Returns everything except the first element of the array.
* `takeUntil(array, callback)`: Returns a slice of the array based on the criteria specified in the callback.
* `without(source, itemsToRemove)`: Returns only the items from the source array that are not in the itemsToRemove array.