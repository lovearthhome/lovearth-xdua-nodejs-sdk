"use strict";

const Sign = require('./utils/Sign');

let token = Sign().generateSign({
  method: 'POST',
  path: '/login',
  appSecret: 'dfalfdlsaf',
  appKey: 'df'
});
console.log(token);