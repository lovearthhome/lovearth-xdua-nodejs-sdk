'use strict'

const Client = require('aliyun-api-gateway').Client
const CryptoJS = require('crypto-js')

const client = new Client('24772094','5f4521e0989db4aa0b30b5a716a8b33b');

// TODO !important: Should set up an https server
const API_END_POINT = 'http://api.xdua.com'
const INITIAL_DUA    = '16fc397a75a4265040875ced14121147'

/**
 * Login Method
 *
 * @param username The phone number of the registered user, should be like '15810419011'.
 *  There should not be any ' ' or '-' between the digit
 * @param password the password of the user
 * @returns {Promise<*>} the promise of the login status
 */
async function login({ username, password }) {
  const url = API_END_POINT + '/login'

  // Add '+86-' to the username, since we currently only support registration from China mainland
  let formattedUsername = '+86-' + username
  // Use md5 to hash the password
  let passwordMD5 = CryptoJS.MD5(password).toString()

  return client.post(url, {
      headers: {
        'accept': 'application/json',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'dua': INITIAL_DUA,
        'apiv': '1.0.0'
      },
      signHeaders: {
        'X-Ca-Stage': 'RELEASE',
      },
      data: {
        by: 'tel',
        ustr: formattedUsername,
        pwd: passwordMD5,
      },
    }
  )
}

module.exports = {
  login,
}
