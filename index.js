const express = require('express');
const usersRoute = require('./routes/usersRoute');
const cardapioRoute = require('./routes/cardapioRoute');
const homePageRoute = require('./routes/homePageRoute');

let app = express();

app.use('/', homePageRoute);
app.use('/usuarios', usersRoute);
app.use('/cardapio', cardapioRoute);

app.listen(3000, () => console.log("O servidor está rodando!"));