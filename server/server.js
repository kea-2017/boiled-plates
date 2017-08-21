var express = require('express')
const passport = require('passport')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')
var server = express()

var greetings = require('./routes/greeting')
var auth = require('./routes/auth')


server.use(cors('*'))
server.use(passport.initialize())

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/greetings', greetings)
// server.use('/api/auth', auth)
server.use('/api/v1/auth', auth)

module.exports = function(db) {
  server.set('db', db)
  return server
}
