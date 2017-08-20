var express = require('express')
const router = express.Router()

var authDb = require('../db/auth')

// router.post('/register', register,  auth.issueJwt)

router.post('/register', register)

function register(req,res, next) {
  const {username, password} = req.body


}



// router.post('/register', register => {
//   let db = req.app.get('db')
//   authDb.getAuth(db)
//     .then(data => {
//       res.json(data)
//     })
// })

module.exports = router
