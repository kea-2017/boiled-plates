var path = require('path')
var express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const auth = require('./lib/auth')
const apiRoutes = require('./routes/api')
var bodyParser = require('body-parser')
var cors = require('cors')

var greetings = require('./routes/greeting')

var server = express()

server.use(function(req, res, next) {
  if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] === 'http') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''))
  }
  next()
})

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(passport.initialize())
server.use('/api/v1/', apiRoutes)
server.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

server.use('/api/greetings', greetings)

module.exports = function(db) {
  server.set('db', db)
  passport.use(new LocalStrategy(auth.verify(db)))
  return server
}
