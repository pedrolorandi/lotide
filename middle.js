// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length)
    return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
      return false;
  }

  return true;
}

const assertArraysEqual = function(actual, expected) {
  let message = "";
  let equal = eqArrays(actual, expected);

  equal ? message = `✅✅✅ Assertion Passed: ${actual} === ${expected}` : message = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  console.log(message);
};

const middle = function(array) {
  let middleArray = [];
  let halfIndex = Math.floor(array.length / 2);

  if (array.length <= 2) return middleArray;

  if (array.length % 2 === 0) {
    middleArray = array.slice(halfIndex - 1, halfIndex + 1);
  } else {
    middleArray.push(array[halfIndex]);
  }

  return middleArray;
};

// TEST CASE
console.log(middle([1])); // => []
console.log((middle([1, 2]))); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]