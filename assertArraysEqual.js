const eqArrays = require("./eqArrays");
//Asserts if two arrays are equal
function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) console.log(`🟢🟢🟢 ${arr1} and ${arr2} are equal`);
  else console.log(`🛑🛑🛑 ${arr1} and ${arr2} are not equal`);
}
module.exports = assertArraysEqual;
