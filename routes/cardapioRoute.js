const express = require('express');
const cardapioController = require('../controllers/cardapioController');

let route = express.Router();


route.get('/cadastrar/:pizza/:preco', (req, res) => {
    let {pizza, preco} = req.params;
    res.send(`Você cadastrou a pizza de sabor ${pizza} com  preço R$${preco},00 reais.`);
});

route.get('/:ver-cardapio', cardapioController.listarCardapio);

module.exports = route;

