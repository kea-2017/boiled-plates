const express =require('express')
const router = express.router

const users = require('../lib/users')


router.post('/register', register)

function register(req, res) {
  const {username, password} = req.body
  users.exists(req.doby.username)
  .then(exists => {
    if (exists){
      return res.status(400).send({message: 'user exists'})
    }
    users.create(req.body.usename, req.body.password)
      .then(() => next())
  })
  .catch(err => {
    res.send(400).send({message: err.message})
  })

}


module.exports= router
