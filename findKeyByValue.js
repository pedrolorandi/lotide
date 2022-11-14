// The function takes in an object and a value and returns the first key that corresponds to that value.
const findKeyByValue = function(list, title) {
  let genre = undefined;

  for (let key in list) {
    if(list[key] === title) {
      genre = key;
      return genre;
    }
  }

  return genre;
};

module.exports = findKeyByValue;