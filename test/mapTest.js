const assert = require('chai').assert;
const map    = require('../map');

describe("#map", () => {
  it("returns [ 'g', 'c', 't', 'm', 't' ] for ['ground', 'control', 'to', 'major', 'tom'] and word => word[0]", () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("returns [2, 4, 6, 8, 10] for [1, 2, 3, 4, 5] and num => num * 2", () => {
    assert.deepEqual(map([1, 2, 3, 4, 5], num => num * 2), [2, 4, 6, 8, 10]);
  });

  it("returns [1,0,1,0,1,0,1,0,1,0] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and num => num % 2", () => {
    assert.deepEqual(map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], num => num % 2), [1,0,1,0,1,0,1,0,1,0]);
  });
});