
function userExists (username, db) {
  //return true of false
  return db('users')
  .where('username', username)
  .select('*')
}

function createUser (newUser) {
  return db('users')
  .insert(newUser)
  //insert newUser
}

module.exports = {
  userExists,
  createUser
}
