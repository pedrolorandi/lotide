// The function takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
const takeUntil = function(array, callback) {
  let newArray = [];
  for (let item of array) {
    if (callback(item)) {
      return newArray;
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};


module.exports = takeUntil;