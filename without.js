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

const without = function(source, itemsToRemove){
  const newArray = source.filter(element => !itemsToRemove.includes(element));
  return newArray;
}

// TEST CASE
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);