'use strict';

// Object.values/Object.entries are stage 3, planned for ES8/ES2017
require('object.values/shim')();
require('object.entries/shim')();

// String#padStart/String#padEnd are stage 3, planned for ES8/ES2017
require('string.prototype.padstart/shim')();
require('string.prototype.padend/shim')();

// Object.getOwnPropertyDescriptors is stage 3, planned for ES8/ES2017
require('object.getownpropertydescriptors/shim')();

// Eventually...
// require('./es2018');
