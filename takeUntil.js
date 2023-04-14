const takeUntil = function (array, callback) {
  let results = [];
  for (let item of array) {
    if (!callback(item))
      results.push(item);
    else break;
  }
  return results;
};



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

assertArraysEqual( takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0),[ 1, 2, 5, 7, 2 ]);
assertArraysEqual( takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual( takeUntil([2, 4, 14, 18, 20, 10, 3, 4, 5], x => x % 2 !== 0),[ 2, 4, 14, 18, 20, 10 ]);

module.exports = takeUntil;