const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length)
    return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
      return false;
  }

  return true;
}

const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length)
    return false;

  for (key of obj1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key]))
        return false;
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let message = "";
  let equal = eqObjects(actual, expected);

  equal ? message = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : message = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  console.log(message);
};