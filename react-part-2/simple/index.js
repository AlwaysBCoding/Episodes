var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 3000))

app.use(express.static(__dirname + '/build'))

app.get('*', function(request, response) {
  response.sendFile(__dirname + '/build/index.html')
})

app.listen(app.get('port'), function() {
  console.log("Express server started on port", app.get('port'))
})
