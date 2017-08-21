const express =require('express')
const router = express.Router()
const users = require('../db/users')



router.post('/', register)

function register(req, res, next) {
  const {username, password} = req.body

  users.exists(req.body.username, req.app.get('db'))
  .then(exists => {
    if (exists){
      return res.status(400).send({message: 'user exists'})
    }
    users.create(req.body.usename, req.body.password,  req.app.get('db'))
      .then(() => res.sendStatus(201))
  })
  .catch(err => {
    res.status(500).send({message: err.message})
  })

}


module.exports= router
