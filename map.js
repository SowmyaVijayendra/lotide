
const map= function(array, callback){  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
function eqArrays(arr1, arr2) { 
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
}

function assertArraysEqual(arr1, arr2){
  if(eqArrays(arr1, arr2))
    console.log(`🟢🟢🟢 ${arr1} and ${arr2} are equal`) 
  else
  console.log(`🛑🛑🛑 ${arr1} and ${arr2} are not equal`) 
}
const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["ground", ["control","system"], "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words1, word => word[0]);
const results3 = map(words, word => word[word.length-1]);
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2,[ 'g', 'control', 't', 'm', 't' ]);
assertArraysEqual(results3,[ 'd', 'l', 'o', 'r', 'm']);
