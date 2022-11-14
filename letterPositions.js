// The function takes in a string and returns all indices of letter positions in the string.
const letterPositions = function(sentence) {
  const results = {};

  for (let key in sentence) {
    if (sentence[key] !== ' ') {
      if (results[sentence[key]]) {
        results[sentence[key]].push(Number(key));
      } else {
        results[sentence[key]] = [Number(key)];
      }
    }
  }

  return results;
};

module.exports = letterPositions;