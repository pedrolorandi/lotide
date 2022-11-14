const assert    = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("returns { Fang: 2, Jason: 1 } for ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'] and { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false }", () => {
    assert.deepEqual(countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { Fang: 2, Jason: 1 });
  });
});