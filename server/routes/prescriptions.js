var express = require('express')
var router = express.Router()

var prescriptionsDb = require('../db/prescriptions')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  prescriptionsDb.getPrescriptions(db)
    .then(prescriptions => {
      res.json(prescriptions)
    })
})

module.exports = router
