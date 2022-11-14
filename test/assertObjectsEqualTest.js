const assertObjectsEqual = require('../assertObjectsEqual');

// assertObjectsEqual({ a: 1, b: 2, c: 3}, { a: 1, b: 2, c: 3});
// assertObjectsEqual({ a: 1, b: 2, c: 3}, { a: 1, b: 2});
// assertObjectsEqual({ a: 1, b: 2, c: 3}, { a: 1, b: 2, c: '3'});