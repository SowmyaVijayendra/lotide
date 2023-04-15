const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["ground", ["control","system"], "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words1, word => word[0]);
const results3 = map(words, word => word[word.length-1]);
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2,[ 'g', 'control', 't', 'm', 't' ]);
assertArraysEqual(results3,[ 'd', 'l', 'o', 'r', 'm']);