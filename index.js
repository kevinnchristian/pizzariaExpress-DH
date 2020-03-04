const express = require('express');
const routeUsers = require('./routes/usersRoute');
const cardapioRoute = require('./routes/cardapioRoute');

let app = express();

app.get('/', (req, res) => {
    res.send("Você está no sistema Pizzaria DH!!!");
});

app.use('/usuarios', routeUsers);
app.use('/cardapio', cardapioRoute);

app.listen(3000, () => console.log("O servidor está rodando!"));

