"use strict";

var _util = _interopRequireDefault(require("util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Attribution: https://github.com/ngonzalvez/rest-facade/blob/master/src/exceptions/ArgumentError.js
 */
const ArgumentError = function (message) {
  this.name = 'ArgumentError';
  this.message = message || '';
  Error.captureStackTrace(this, this.constructor);
};

_util.default.inherits(ArgumentError, Error);

module.exports = ArgumentError;