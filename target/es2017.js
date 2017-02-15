'use strict';

// Object.values/Object.entries are stage 4, in ES8/ES2017
require('object.values/shim')();
require('object.entries/shim')();

// String#padStart/String#padEnd are stage 4, in ES8/ES2017
require('string.prototype.padstart/shim')();
require('string.prototype.padend/shim')();

// Object.getOwnPropertyDescriptors is stage 4, in ES8/ES2017
require('object.getownpropertydescriptors/shim')();

// Eventually...
// require('./es2018');
