# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sowmyavijayendra/lotide`

**Require it:**

`const _ = require('@sowmyavijayendra/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Asserts if two arrays are equal
* `assertEqual(...)`: Asserts if two values are equal
* `assertObjectsEqual(...)`: Asserts if two objects are equal
* `countLetters(...)`: Counts each letter in a sentence
* `countOnly(...)`: Counts each specified word in an array
* `eqArrays(...)`: Returns true if two arrays are equal
* `eqobjects(...)`: Returns true if two objects are equal
* `findKey(...)`: finds first key in an object based on the callback function logic
* `findKeyByValue(...)`: finds first key in an object based the specified Value
* `flatten(...)`: returns a flattened nested array 
* `head(...)`: returns first element in an array
* `letterPositions(...)`: returns an object with each letter in the given word as key and number of its occurances as the value
* `map(...)`: custom map function which calls callback func on each array element
* `middle(...)`: finds middle element of an array
* `tail(...)`: returns all elements except first element of an array
* `takeUntil(...)`: returns an array with all the elements till the callback function fails
* `without(...)`: returns an array with elements not specified in items to remove list