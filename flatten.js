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
//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
//assertArraysEqual(flatten([1,2,3,4], []), [1,2,3,4]);

module.exports = flatten;