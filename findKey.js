// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if(callback(object[key]))
      return key;
  }

  return undefined;
};

// TEST CODE
const noma = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(noma, "noma");

const none = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4) // => "undefined"

assertEqual(none, undefined);

const multiple = findKey({
  "Blue Hill": { stars: 1, test: true },
  "Akaleri":   { stars: 3, test: true },
  "noma":      { stars: 2, test: false },
  "elBulli":   { stars: 3, test: false },
  "Ora":       { stars: 2, test: true },
  "Akelarre":  { stars: 3, test: false }
}, x => x.test === false && x.stars === 3) // => "elBulli"

assertEqual(multiple, "elBulli");