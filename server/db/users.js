

// var Knex = require('knex')
// var config = require('../knexfile')[process.env.NODE_ENV || 'development']
// var knex = Knex(config)


function createUser (username, password, db) {
  return db('users')
  .insert({username, hash: password})
  //insert newUser
}


function userExists (username, db) {
  //return true of false
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
