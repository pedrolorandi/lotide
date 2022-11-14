// The function takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
let newArray = [];
const flatten = function(array) {
  
  for (let element of array) {
    Array.isArray(element) ? flatten(element) : newArray.push(element);
  }

  return newArray;
}

module.exports = flatten;