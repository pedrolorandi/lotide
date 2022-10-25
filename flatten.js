// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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