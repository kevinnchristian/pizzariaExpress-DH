const express = require('express');
const methodOverride = require('method-override');
const expressSession = require('express-session');
const indexRoute = require('./routes/indexRoute');
const cardapioRoute = require('./routes/cardapioRoute');
const loginRoute = require('./routes/loginRoute');

let app = express();

app.use(express.static('public'));
app.use(methodOverride('_method'));
// Configurando o express para aceitar ejs.
app.set('view engine', 'ejs');
app.use(express.urlencoded({
  extended:true
}));

app.use(expressSession({
  secret: 'banana',
  resave: true,
  saveUninitialized: true
}));
app.use(indexRoute);
app.use('/cardapio', cardapioRoute);
app.use(loginRoute);

app.listen(3535, () => console.log("O servidor está rodando!"));