var express = require('express')
var path = require('path')
var app = express()


app.set('view engine', 'ejs')
app.set('app/build', path.join(__dirname, 'app/build'))

app.get('/', function (req, res) {
  app.render("index")
})


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})