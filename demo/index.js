const lovearth = require('../dist')

const {
  APP_SECRET,
  APP_KEY,
  username,
  password,
} = require('./option')


const dua = lovearth({
  APP_SECRET: APP_SECRET,
  APP_KEY: APP_KEY,
})

async function demo() {
  try {
    await dua.initialize()
    let res = await dua.login({
      username: username,
      password: password,
    })
    console.log(res)
  } catch (e) {
    console.log('login failed handle')
    console.log(e)
  }
}
demo()
// dua.initialize().then(() => {
//   dua.login({
//     username: username,
//     password: password,
//   }).then(res => {
//     console.log(res)
//   }).catch(err => {
//     console.log(err)
//   })
// })
