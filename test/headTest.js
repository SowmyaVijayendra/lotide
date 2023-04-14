const head = require('../head');
const assertEqual = require('../assertEqual');
// TEST CODE
assertEqual(head([11,2,3,4]), 11);
assertEqual(head([1,2,3,4]), "sow");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([11]), 11);
assertEqual(head([]), 11);
assertEqual(head(12), 11);