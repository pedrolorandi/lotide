// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(array1, array2) {
  let equal = true;
  let message = "";

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
    equal = false;
  }

  equal ? message = `✅✅✅ Assertion Passed` : message = `🛑🛑🛑 Assertion Failed`;
  console.log(message);
};
