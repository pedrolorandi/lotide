// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  let equal = true;
  let message = "";

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i])
    equal = false;
  }

  equal ? message = `✅✅✅ Assertion Passed: ${actual} === ${expected}` : message = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  console.log(message);
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
      return false;
  }

  return true;
}

let newArray = [];
const flatten = function(array) {

  for (let element of array) {
    Array.isArray(element) ? flatten(element) : newArray.push(element);
  }

  return newArray;
}

// TEST CASE
console.log(flatten([1, [2, [3, [4]], 5], [6]])) // => [1, 2, 3, 4, 5, 6]