// FUNCTION IMPLEMENTATION -Asserts if two values are equal
const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;
