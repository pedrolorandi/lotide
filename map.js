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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// TEST CASE

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])

const numbers = [1, 2, 3, 4, 5];
const results2 = map(numbers, num => num * 2);
assertArraysEqual(results2, [ 2, 4, 6, 8, 10]);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const results3 = map(numbers2, num => num % 2);
assertArraysEqual(results3, [1,0,1,0,1,0,1,0,1,0])
