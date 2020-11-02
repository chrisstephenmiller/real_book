const router = require('express').Router()
module.exports = router

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.use('/google', require('./google'))
