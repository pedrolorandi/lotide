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
