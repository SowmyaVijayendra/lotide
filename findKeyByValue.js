const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(myObject, value){
  for(let property in myObject){
    if (myObject.hasOwnProperty(property)){
      if(myObject[property] === value)
      return property;
    }    
  }
};
// Alternate solution
const findKeyByValue1 = function(myObject, value){
 for(let key of Object.keys(myObject)){
    if(myObject[key] === value)
    return key; }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");

assertEqual(findKeyByValue1(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue1(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue1(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");

module.exports = findKeyByValue;