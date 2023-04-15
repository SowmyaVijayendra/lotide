//returns an array with elements not specified in items to remove list
function without(source, itemsToRemove) {
  let cleaned = [];
  let removeList = [];
  removeList = itemsToRemove;
  for (let i of source) {
    if (!removeList.includes(i)) {
      cleaned.push(i);
    }
  }
  return cleaned;
}

module.exports = without;
