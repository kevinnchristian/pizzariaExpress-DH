const express = require('express');
const methodOverride = require('method-override');
const cardapioRoute = require('./routes/cardapioRoute');
const indexRoute = require('./routes/indexRoute');

let app = express();

app.use(express.static('public'));
app.use(methodOverride('_method'));
// Configurando o express para aceitar ejs.
app.set('view engine', 'ejs');
app.use(express.urlencoded({
  extended:true
}));
app.use('/cardapio', cardapioRoute);
app.use(indexRoute);

app.listen(3535, () => console.log("O servidor está rodando!"));