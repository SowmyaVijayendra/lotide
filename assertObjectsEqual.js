const eqArrays =function(arr1, arr2) { 
  if(!arr1 && !arr2)
    return true;
  else if(!arr1 || !arr2)
    return false;
  else if (arr1.length != arr2.length)
    return false;
  else{
    let i=0;
    while(i < arr1.length ){
      if(arr1[i] !== arr2[i])
        return false;
      i++;
    }
    return true;
  }
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  if(!object1 && !object2)
    return true;
  else if(!object1 || !object2)
    return false;
  else if (Object.keys(object1).length !== Object.keys(object2).length)
    return false;   
  else{     
    for(let key of Object.keys(object1)){
      if(object1[key] instanceof Array && object1[key] instanceof Array){
        if(!eqArrays(object1[key], object2[key]))
          return false;
      }
      else if(object1[key] instanceof Array && !object1[key] instanceof Array)
        return false;
      else if(!object1[key] instanceof Array && object1[key] instanceof Array)
        return false;      
      else if(object1[key] !== object2[key])
        return false;
    }
    return true;
  };

};

function assertObjectsEqual(obj1, obj2){
  const inspect = require('util').inspect;
  if(eqObjects(obj1, obj2))
    console.log(`🟢🟢🟢 ${inspect(obj1)} and ${inspect(obj2)} are equal`) 
  else
    console.log(`🛑🛑🛑 ${inspect(obj1)} and ${inspect(obj2)} are not equal`) 

}
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertObjectsEqual(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject , longSleeveShirtObject); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false

module.exports = assertObjectsEqual;