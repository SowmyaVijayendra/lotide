const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 3, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 3]);
assertArraysEqual([], []);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);