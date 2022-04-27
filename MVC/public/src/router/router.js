const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.send('Ola Mundo')
})

router.get('/produto/:id', function(req, res) {
    res.send('Produto id: ', id)
})

module.exports = router;