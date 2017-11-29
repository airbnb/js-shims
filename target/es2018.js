'use strict';

// Promise.prototype.finally is stage 3, a possible candidate for ES2018
if (typeof Promise === 'function') {
  require('promise.prototype.finally/shim')(); // eslint-disable-line global-require
}

require('array.prototype.flatten/shim')();
require('array.prototype.flatmap/shim')();
