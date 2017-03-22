'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/hello/:name', (req, res) =>{
  res.send({ message: `Hello ${req.params.name}!`})
})

app.listen(3000, () => {
  console.log(`REST API running in http://localhost:${port}`);
});
