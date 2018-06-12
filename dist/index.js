"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _aliyunApiGateway = require("aliyun-api-gateway");

var _cryptoJs = _interopRequireDefault(require("crypto-js"));

var _lodash = _interopRequireDefault(require("lodash"));

var _ArgumentError = _interopRequireDefault(require("./exceptions/ArgumentError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const client = new _aliyunApiGateway.Client('24772094', '5f4521e0989db4aa0b30b5a716a8b33b'); // TODO !important: Should set up an https server

const API_END_POINT = 'http://api.xdua.com';
const INITIAL_DUA = '16fc397a75a4265040875ced14121147';
/**
 * Login Method
 *
 * @param {String} username The phone number of the registered user, should be like '15810419011'.
 *  There should not be any ' ' or '-' between the digit
 * @param {String} password the password of the user
 * @returns {Promise<*>} the promise of the login status
 */

async function login({
  username,
  password
}) {
  if (_lodash.default.isNil(username) || typeof username !== 'string') {
    throw new _ArgumentError.default('String Type Field: username is required');
  }

  if (_lodash.default.isNil(password) || typeof password !== 'string') {
    throw new _ArgumentError.default('String Type Field: password is required');
  }

  const url = API_END_POINT + '/login'; // Add '+86-' to the username, since we currently only support registration from China mainland

  let formattedUsername = '+86-' + username; // Use md5 to hash the password

  let passwordMD5 = _cryptoJs.default.MD5(password).toString();

  return client.post(url, {
    headers: {
      'accept': 'application/json',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'dua': INITIAL_DUA,
      'apiv': '1.0.0'
    },
    signHeaders: {
      'X-Ca-Stage': 'RELEASE'
    },
    data: {
      by: 'tel',
      ustr: formattedUsername,
      pwd: passwordMD5
    }
  });
}