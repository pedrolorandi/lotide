// The function takes in an object and callback and returns the first key that meets the criteria specified in callback.
const findKey = function(object, callback) {
  for (let key in object) {
    if(callback(object[key]))
      return key;
  }

  return undefined;
};

module.exports = findKey;