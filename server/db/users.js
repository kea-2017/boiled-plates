var {knex} = require('../index.js')


function createUser (username, password, conn) {
  const db = conn || knex
  return db('users')
  .insert({username, hash: password})
  //insert newUser
}


function userExists (username, conn) {
  //return true of false
  const db = conn || knex
  return db('users')
  .count ('id as n')
  .where('username', username)
  .then(count => {
    return count[0].n > 0
  })
}



module.exports = {
  userExists,
  createUser
}
