const eqObjects = require('./eqObjects');

// The function takes in 2 objects and returns true if they are equal and false otherwise.
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let message = "";
  let equal = eqObjects(actual, expected);

  equal ? message = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : message = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  console.log(message);
};

module.exports = assertObjectsEqual;