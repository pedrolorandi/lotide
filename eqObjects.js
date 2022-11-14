const eqArrays = require('./eqArrays');

// The function takes in 2 objects and return true if they are equal and false otherwise.
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

module.exports = eqObjects;