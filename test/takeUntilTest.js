const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

assertArraysEqual( takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0),[ 1, 2, 5, 7, 2 ]);
assertArraysEqual( takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual( takeUntil([2, 4, 14, 18, 20, 10, 3, 4, 5], x => x % 2 !== 0),[ 2, 4, 14, 18, 20, 10 ]);
