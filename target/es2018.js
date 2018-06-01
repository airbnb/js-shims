'use strict';

if (typeof Promise === 'function') {
  require('promise.prototype.finally/auto'); // eslint-disable-line global-require
}

// TODO: remove this from next semver-major
require('array.prototype.flatten/shim')();

require('./es2019');
