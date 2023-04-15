const countLetters = require("../countLetters");
const assertEqual = require('../assertEqual');

const res = countLetters("lighthouse in the house");
console.log(res);

assertEqual(res["i"], 2);

assertEqual(res["h"], 4);
