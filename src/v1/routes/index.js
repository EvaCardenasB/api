var router = require('express').Router()
  var songs = require('./songs')
  var films = require('./films')

  router.use('/songs', songs)
  router.use('/films', films)
  
  router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
  })

  module.exports = router