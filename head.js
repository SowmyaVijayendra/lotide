// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const head =  function(arr){
  return arr[0];
}

// TEST CODE
assertEqual(head([11,2,3,4]), 11);
assertEqual(head([1,2,3,4]), "sow");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([11]), 11);
assertEqual(head([]), 11);
assertEqual(head(12), 11);