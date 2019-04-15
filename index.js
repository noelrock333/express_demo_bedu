var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser());

app.get('/', function (req, res) {
  // res.send('Hola mundo!');
  res.sendFile(path.join(__dirname + '/form.html'));
});

app.post('/', function (req, res) {
  console.log(req.body);
  res.send('Datos recibidos')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});