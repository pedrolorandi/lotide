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
