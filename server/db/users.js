// const connection = require('./connection')
const hash = require('../auth/hash')

function createUser(username, password, conn) {
  const db = conn || connection
  return db('users').insert({username, hash: password})
}

function userExists(username, conn){
const db = conn || connection
return db('users').count('id as n').where('username', username).then(count => {
  return count[0].n > 0
})
}

function createUser (username, password, conn) {
  const passwordHash = hash.generate(password)
  const db = conn || connection
  return db('users')
  .insert({username, hash: passwordHash})
}

module.exports = {
createUser,
userExists
}
