const config = require('../../knexfile')[process.env.NODE_ENV || 'development']

const hash = require('../auth/hash')

function exists (username, db){
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function create (username, password, db){
  const hashedPassword = hash.getHash(password)

  return db('users')
    .insert({
      username: username,
      hash: hashedPassword
    })
}

module.exports = {
  exists,
  create
}
