/**
 * Attribution: https://github.com/ngonzalvez/rest-facade/blob/master/src/exceptions/ArgumentError.js
 */

import util from 'util'

const ArgumentError = function(message) {
  this.name = 'ArgumentError'
  this.message = message || ''

  Error.captureStackTrace(this, this.constructor)
}

util.inherits(ArgumentError, Error)

module.exports = ArgumentError

