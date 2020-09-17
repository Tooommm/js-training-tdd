'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
function jadenCase(str){
  return str.toUpperCase();
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase.length, 1);
assert.strictEqual(jadenCase("hello World"), 'HELLO WORLD');
assert.strictEqual(jadenCase("tHommAs"), 'THOMMAS');
// End of tests */
