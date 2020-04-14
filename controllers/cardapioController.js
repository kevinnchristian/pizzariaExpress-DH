const Cardapio = require('../models/Cardapio');
const email = require('../configs/email');

let cardapioController = {

    listarCardapio: (req, res) => {
        let listaDePizza = Cardapio.listarCardapio();
        res.render('cardapio', {listaDePizza})
    },

    formCadastro: (req, res) => {

        let envioEmail = {
            from: 'teste.envio@gmail.com',
            to: 'enviar.teste@gmail.com',
            subject: 'Novo Cadastro de Pizza',
            html:`<h1>A pizza: Teste foi cadastrada no sistema!</h1>`
        }

        email.sendMail(envioEmail, (error) => {
            if (error) {
                res.send("Deu ruim")
            } else {
                res.send("Deu bom, email enviado!!!")
            }
        })

        res.render('cadastroCardapio');
    },

    salvarCadastro: (req, res) => {
        const { nomePizza, precoPizza } = req.body;
        const [fotoPizza] = req.files;
        Cardapio.cadastrarPizza(nomePizza, precoPizza, fotoPizza.filename);

        res.redirect('/cardapio/ver-cardapio');
    },

    deletarCadastro: (req, res) => {
        let { posicao } = req.params;
        Cardapio.deletarPizza(posicao);
        res.redirect('/cardapio/ver-cardapio');
    },

    formAlteracao: (req, res) => {
        let { posicao } = req.params;
        const pizza = Cardapio.buscarPizza(posicao);
        return res.render('alterarCardapio', {pizza, posicao});
    },

    alterarPizza: (req, res) => {
        let { nomePizza, precoPizza, posicao } = req.body;
        let pizza = Cardapio.atualizarPizza(nomePizza, precoPizza, posicao);

        return res.render('alterarCardapio', { pizza, posicao, msg:"Pizza atualizada com sucesso!!!" } )
    }

};

module.exports = cardapioController;