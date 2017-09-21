const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')
const greetings = require('./routes/greeting')
const prescriptions = require('./routes/prescriptions')
const authRoutes = require('./routes/auth')
const server = express()

server.use(cors('*'))
server.use(passport.initialize())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/v1/auth', authRoutes)
server.use('/api/greetings', greetings)
server.use('/api/prescriptions', prescriptions)

module.exports = function(db) {
  server.set('db', db)
  return server
}
