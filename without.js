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

function without(source, itemsToRemove){
  let cleaned = [];
  let removeList= [];
  removeList =itemsToRemove;
  for(let i of source){
    if(!removeList.includes(i)){     
      cleaned.push(i);      
    }
      
  }
  return cleaned;
}

// TEST CODE

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


assertArraysEqual(without([1,2,3,4], [2,3]), [1,4]);
assertArraysEqual(without([1,2,3,4], []), [1,2,3,4]);
assertArraysEqual(without([1,2,3,4], [5,6]), [1,2,3,4]);
assertArraysEqual(without([1,2,3,4], [1,2,3,4]), []);
assertArraysEqual(without([1,2,3,4], ["1","2"]), [1,2,3,4]);
