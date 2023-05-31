const express = require('express');

const app = express();

app.get('/', function(req, res, next){
  res.send('HelloWorld');
});

app.listen(3333);