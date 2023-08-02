// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); 
// assertEqual(words.length, 3); 

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });
  it("returns '3' for [1, 2, '3']", () => {
    assert.deepEqual(tail([1, 2, '3']), [2, '3']); 
  });
});