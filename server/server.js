var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var passport = require('passport')
var cors = require('cors')

var greetings = require('./routes/greeting')
var register = require('./routes/auth')

var server = express()
server.use(passport.initialize())

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/greetings', greetings)
server.use('/api/v1/auth/register', register)

module.exports = function(db) {
  server.set('db', db)
  return server
}
