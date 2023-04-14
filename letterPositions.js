const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  let counter=0;
  for(let letter of sentence){
    if(letter !== ' '){
    if(results[letter])
      results[letter].push(counter);
    else{
      results[letter] = [counter];     
      }
    }
    counter++;
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

const result = letterPositions("Hello");
assertArraysEqual(result["l"], [2,3]);
assertArraysEqual(result["H"], [0]);
assertArraysEqual(result["o"], [4]);

module.exports = letterPositions;