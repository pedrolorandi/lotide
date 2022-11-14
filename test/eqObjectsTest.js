const assert    = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for { c: '1', d: ['2', 3] } and { d: ['2', 3], c: '1' }", () => {
    assert.deepEqual(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });

  it("returns false for { c: '1', d: ['2', 3] } and { c: '1', d: ['2', 3, 4] }", () => {
    assert.deepEqual(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
  });
});