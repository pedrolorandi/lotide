const assert  = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("returns 'noma' for { 'Blue Hill: { stars: 1 }, 'noma': { stars: 2 }, 'Ora' : { stars: 2 } } and x => x.stars === 2", () => {
    assert.deepEqual(findKey({ "Blue Hill": { stars: 1 }, "noma": { stars: 2 }, "Ora" : { stars: 2 } } , x => x.stars === 2), 'noma');
  });

  it("returns undefined for { 'Blue Hill: { stars: 1 }, 'noma': { stars: 2 }, 'Ora' : { stars: 2 } } and x => x.stars === 4", () => {
    assert.deepEqual(findKey({ "Blue Hill": { stars: 1 }, "noma": { stars: 2 }, "Ora" : { stars: 2 } } , x => x.stars === 4), undefined);
  });

  it("returns 'elBulli' for { 'Akaleri': { stars: 3, test: true }, 'noma': { stars: 2, test: false }, 'elBulli' : { stars: 3, test: false } } and x => x.test === false && x.stars === 3", () => {
    assert.deepEqual(findKey({ 'Akaleri': { stars: 3, test: true }, 'noma': { stars: 2, test: false }, 'elBulli' : { stars: 3, test: false } }, x => x.test === false && x.stars === 3), 'elBulli');
  });
});