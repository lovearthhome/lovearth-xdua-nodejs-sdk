const lovearth = require('../index')

const {
  APP_SECRET,
  APP_KEY,
  username,
  password,
} = require('./option')


let le = lovearth({
  APP_SECRET: APP_SECRET,
  APP_KEY: APP_KEY,
})

le.initialize().then(() => {
  le.login({
    username: username,
    password: password,
  }).then(res => {
    console.log(res)
  })
})
