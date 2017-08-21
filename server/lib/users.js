const config = require('../../knexfile')[process.env.NODE_ENV || 'development']


const crypto = require('/crypto')


function exists (username, db){
  return connection('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return[0].n > 0
    })
}

function create (username, password, db){
  const hash = crypto.getHash(password)

  return connection('users')
    .insert({
      uusername: username,
      hash: hash
    })
}

module.exports = {
  exists,
  create
}
