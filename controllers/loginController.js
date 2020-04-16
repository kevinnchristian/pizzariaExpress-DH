const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');

let loginController = {

  viewLogin: (req, res) => {
    res.render('auth/login')
  },

  logar: (req, res) => {
    let { email, senha } = req.body;

    const usuarioSalvo = Usuario.buscarUsuario(email);

    if(!usuarioSalvo) {
      return res.render('auth/login', {mensagem: "Email ou senha invalidos!"});
    }

    if(!bcrypt.compareSync(senha, usuarioSalvo.senha)) {
      return res.render('auth/login', {mensagem: "Email ou senha invalidos!"});
    }

    req.session.user = { 
      nome: usuarioSalvo.nome, 
      email: usuarioSalvo.email 
    }



    return res.redirect('/cardapio/ver-cardapio')

  },

  viewRegistro: (req, res) => {
    res.render('auth/registro')
  },

  registrar: (req, res) => {
    let { nome, email, senha } = req.body;
    senha = bcrypt.hashSync(senha, 10);
    Usuario.cadastrarUsuario(nome, email, senha);

    return res.redirect('/login')
  }

}

module.exports = loginController;