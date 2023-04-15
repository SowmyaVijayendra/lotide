const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');
const result = letterPositions("Hello");
assertArraysEqual(result["l"], [2,3]);
assertArraysEqual(result["H"], [0]);
assertArraysEqual(result["o"], [4]);
