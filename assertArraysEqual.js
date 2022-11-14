const eqArrays = require('./eqArrays');

// The function takes in 2 arrays and returns true if they are equal and false otherwise.
const assertArraysEqual = function(actual, expected) {
  let message = "";
  let equal = eqArrays(actual, expected);

  equal ? message = `✅✅✅ Assertion Passed: ${actual} === ${expected}` : message = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  console.log(message);
};

module.exports = assertArraysEqual;