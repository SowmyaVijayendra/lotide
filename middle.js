
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

module.exports = middle;
