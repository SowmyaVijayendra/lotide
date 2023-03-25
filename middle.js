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

function middle(arr){
  let middleArray=[];
  if(arr && arr.length > 2 ){
    if(arr.length % 2 === 0){
      middleArray.push(arr[arr.length/2] - 1);
      middleArray.push(arr[(arr.length/2)]);
    }
    else
      middleArray.push(arr[Math.floor(arr.length/2)]);
  }
  return middleArray;
}
// TEST CODE
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1,2,3,4,5,6], []), [3,4]);