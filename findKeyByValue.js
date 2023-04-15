//finds first key in an object based the specified Value
const findKeyByValue = function (myObject, value) {
  for (let property in myObject) {
    if (myObject.hasOwnProperty(property)) {
      if (myObject[property] === value) return property;
    }
  }
};
// Alternate solution
const findKeyByValue1 = function (myObject, value) {
  for (let key of Object.keys(myObject)) {
    if (myObject[key] === value) return key;
  }
};

module.exports = findKeyByValue;
