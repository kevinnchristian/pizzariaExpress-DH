const express = require('express'); 

let route = express.Router();

route.get('/', (req, res) => {
  res.send('Você está na nossa página inicial.');
});

route.get('/home', (req, res) => {
  res.send('Você está no sistema Pizzaria DH!!!');
});

module.exports = route;