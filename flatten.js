// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
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

let newArray = [];
const flatten = function(array) {

  for (let element of array) {
    Array.isArray(element) ? flatten(element) : newArray.push(element);
  }

  return newArray;
}

// TEST CASE
assertArraysEqual(flatten([1, [2, [3, [4]], 5], [6]]), [1, 2, 3, 4, 5, 6]);