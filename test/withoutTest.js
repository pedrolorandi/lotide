const assert  = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns [2, 3] for [1, 2, 3] and [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  
  it("returns ['hello', 'world'] for ['hello', 'world', 'lighthouse'] and ['lighthouse']", () => {
    assert.deepEqual(without(['hello', 'world', 'lighthouse'], ['lighthouse']), ['hello', 'world']);
  });
});