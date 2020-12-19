const config = require('./main');
const assert = require('assert');

assert.ok(typeof config.rules === 'object');
assert.deepStrictEqual(config.rules['no-console'], [
  'error',
  { allow: ['warn', 'error'] },
]);
