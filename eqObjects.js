const eqArrays = require("./eqArrays");
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  if (!object1 && !object2) return true;
  else if (!object1 || !object2) return false;
  else if (Object.keys(object1).length !== Object.keys(object2).length)
    return false;
  else {
    let i = 0;
    /* while(i < Object.keys(object1).length ){
      if(Object.keys(object1)[i] !== Object.keys(object2)[i])
        return false;
      i++;
    }*/
    for (let key of Object.keys(object1)) {
      if (object1[key] instanceof Array && object1[key] instanceof Array) {
        if (!eqArrays(object1[key], object2[key])) return false;
      } else if (
        object1[key] instanceof Array &&
        !object1[key] instanceof Array
      )
        return false;
      else if (!object1[key] instanceof Array && object1[key] instanceof Array)
        return false;
      else if (object1[key] !== object2[key]) return false;
    }
    return true;
  }
};

module.exports = eqObjects;
