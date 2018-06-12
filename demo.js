const { login } = require('./dist')

login({
  username: 'Your phone number here',
  password: 'Your password here',
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})