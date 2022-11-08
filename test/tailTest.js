const assert = require('chai').assert;
const tail   = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);

describe('#tail', () => {
  it("returns two elements for result.length", () => {
    assert.strictEqual(result.length, 2);
  });

  it("returns 'Lighthouse' for result[0]", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });

  it("returns 'Labs' for result[1]", () => {
    assert.strictEqual(result[1], "Labs");
  });
});