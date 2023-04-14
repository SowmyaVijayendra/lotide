const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};
const countLetters = function(sentence){
let results = {};
for ( let letter of sentence){
  if(letter !== " "){
    if(results[letter])
    results[letter] += 1;
  else
    results[letter] = 1;
  }  
}

return results;

};
const res = countLetters("lighthouse in the house");
console.log(res);

assertEqual(res["i"], 2);

assertEqual(res["h"], 4);

module.exports = countLetters;