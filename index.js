var express = require('express')
var app = express()

app.use(express.static('.'))

var server = app.listen(3000, '0.0.0.0', function () {
  var host = server.address().address
  var port = server.address().port

  console.log('🌎Go to http://%s:%s', host, port)
})
