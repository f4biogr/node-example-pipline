var assert = require('assert')

function test() {
  assert.equal(4 + 4, 8);
}

if (module == require.main) require('test').run(test);

