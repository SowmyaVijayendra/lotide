//finds first key in an object based on the callback function logic
const findKey = function (myObject, callback) {
  for (let key of Object.keys(myObject)) {
    if (callback(myObject[key])) return key;
  }
};

module.exports = findKey;
