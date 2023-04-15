//returns an object with each letter in the given word as key and number of its occurances as the value
const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  let counter = 0;
  for (let letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) results[letter].push(counter);
      else {
        results[letter] = [counter];
      }
    }
    counter++;
  }
  return results;
};

module.exports = letterPositions;
