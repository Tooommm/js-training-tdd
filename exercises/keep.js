'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst(str) {
  return str.substring(2, 0);
}

function keepLast(str) {
  return str.substring(str.length, str.length - 2 );
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(typeof keepLast, 'function');
assert.strictEqual(keepFirst.length, 1);
assert.strictEqual(keepLast.length, 1);
assert.strictEqual(keepFirst("hello World"), 'he');
assert.strictEqual(keepLast("tHommAs"), 'As');
// End of tests */
