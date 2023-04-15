const eqObjects = require("./eqObjects");
//Asserts if two objects are equal
function assertObjectsEqual(obj1, obj2) {
  const inspect = require("util").inspect;
  if (eqObjects(obj1, obj2))
    console.log(`🟢🟢🟢 ${inspect(obj1)} and ${inspect(obj2)} are equal`);
  else
    console.log(`🛑🛑🛑 ${inspect(obj1)} and ${inspect(obj2)} are not equal`);
}

module.exports = assertObjectsEqual;
