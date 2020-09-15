'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
function cutFirst(str) {
  return str.slice(2);
}

function cutLast(str) {
  return str.slice(0,-2);
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof cutFirst, 'function', 'Should be a function');
assert.strictEqual(cutFirst.length, 1, 'Should takes 1 arguments');
assert.strictEqual(cutFirst('hello'), 'llo');
assert.strictEqual(cutFirst('xxbieng!'), 'bieng!');

assert.strictEqual(typeof cutLast, 'function', 'Should be a function');
assert.strictEqual(cutLast.length, 1, 'Should takes 1 arguments');
assert.strictEqual(cutLast('hello'), 'hel');
assert.strictEqual(cutLast('bieng!xx'), 'bieng!');
// End of tests */
