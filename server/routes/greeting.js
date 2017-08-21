var express = require('express')
var router = express.Router()

var greetingsDb = require('../db/greeting')

router.get('/', (req, res) => {
  console.log("get greetings");
  let db = req.app.get('db')
  greetingsDb.getGreetings(db)
    .then(greetings => {
      console.log(greetings);
      res.json(greetings)
    })
})

module.exports = router
