const Cardapio = require('../models/Cardapio');

let cardapioController = {

    listarCardapio: (req, res) => {
        let listaDePizza = Cardapio.listarCardapio();
        res.render('cardapio', {listaDePizza})
    }
};

module.exports = cardapioController;