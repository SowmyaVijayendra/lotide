//const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail',() => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("Check the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it
    assert.strictEqual(words.length, 3); 
  });
  it("returns zero elements for ['Hello']", () => {
    assert.deepEqual(tail(['Hello']), []); 
  });
  it("returns zero elements for []", () => {
    assert.deepEqual(tail([]), []); 
  });
});

/*
// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array 

assertEqual(words.length, 3); // original array should still have 3 elements!

// test Case: single item array
const result1 = tail(["Hello"]);
assertEqual(result1.length, 0); // ensure we get back 0 elements

// test Case: empty  array
const result2 = tail([]);
*/