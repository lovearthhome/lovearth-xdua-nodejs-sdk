'use strict';

function supportAsyncFunctions() {
  try {
    new Function('(async function () {})()');
    return true;
  } catch (ex) {
    return false;
  }
}


const asyncSupported = supportAsyncFunctions();

module.exports = asyncSupported ? require('./lib/index.js') : require('./dist/index.js');
