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
function flatten(parentArray){
  let result=[];
  for(let item of parentArray){
    if(Array.isArray(item)){
      for(let item1 of item){
        result.push(item1);
      }
    }
    else
      result.push(item);
  }
   return result;
}

// TEST CODE
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
assertArraysEqual(flatten([1,2,3,4], []), [1,2,3,4]);

