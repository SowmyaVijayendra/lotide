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

