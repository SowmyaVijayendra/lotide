//returns a flattened nested array 
function flatten(parentArray) {
  let result = [];
  for (let item of parentArray) {
    if (Array.isArray(item)) {
      for (let item1 of item) {
        result.push(item1);
      }
    } else result.push(item);
  }
  return result;
}

module.exports = flatten;
