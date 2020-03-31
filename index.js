const express = require('express');
const usersRoute = require('./routes/usersRoute');
const cardapioRoute = require('./routes/cardapioRoute');
const indexRoute = require('./routes/indexRoute');

let app = express();

// Configurando o express para aceitar ejs.
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/usuarios', usersRoute);
app.use('/cardapio', cardapioRoute);
app.use(indexRoute);

app.listen(3535, () => console.log("O servidor está rodando!"));