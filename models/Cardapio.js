const fs = require('fs');
const path = require('path');

const arquivoCardapio = path.join('cardapio.json');

function listarCardapio () {
    let listaDePizzas = JSON.parse(fs.readFileSync(arquivoCardapio, {encoding: 'utf-8'}));

    return listaDePizzas;
};

function cadastrarPizza(nome, preco, nomeImg) {
    let novaPizza = {
        nome,
        preco,
        img: nomeImg
    }
    let listaDePizzas = JSON.parse(fs.readFileSync(arquivoCardapio, {encoding: 'utf-8'}));

    listaDePizzas.push(novaPizza);

    fs.writeFileSync(arquivoCardapio, JSON.stringify(listaDePizzas));
}

function deletarPizza(posicao) {
    let listaDePizzas = JSON.parse(fs.readFileSync(arquivoCardapio, {encoding: 'utf-8'}));

    listaDePizzas.splice(posicao, 1);

    return fs.writeFileSync(arquivoCardapio, JSON.stringify(listaDePizzas));
}

function buscarPizza(posicao) {
    let listaDePizzas = JSON.parse(fs.readFileSync(arquivoCardapio, {encoding: 'utf-8'}));

    return listaDePizzas[posicao];
}

function atualizarPizza(nome, preco, posicao){
    let pizza = {
        nome,
        preco,
        img: 'pizza3queijos.jpg'
    }

    let listaDePizzas = JSON.parse(fs.readFileSync(arquivoCardapio, {encoding: 'utf-8'}));

    listaDePizzas[posicao] = pizza

    fs.writeFileSync(arquivoCardapio, JSON.stringify(listaDePizzas));

    return pizza
}

module.exports = { listarCardapio, cadastrarPizza, deletarPizza, buscarPizza, atualizarPizza }