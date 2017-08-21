var express = require('express')
const router = express.Router()

const { userExists, createUser} = require ('../db/users')


// router.post('/register', register,  auth.issueJwt)

router.post('/register', register)

function register(req,res, next) {
  const {username, password} = req.body
  userExists(username, req.app.get('db'))
  .then(exists => {
    if (exists){
      return res.status(400).send({ message: 'User exists'})
    }
    createUser(username, password, req.app.get('db'))
    .then(() => res.status(201)
    .end())
  })
  .catch(err => {
    res.status(500).send({message: err.message})
  })
}



// router.post('/register', register => {
//   let db = req.app.get('db')
//   authDb.getAuth(db)
//     .then(data => {
//       res.json(data)
//     })
// })

module.exports = router
