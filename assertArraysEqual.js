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
// TEST CODE

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 3, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 3]);
assertArraysEqual([], []);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);