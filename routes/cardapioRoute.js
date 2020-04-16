const express = require('express');
const cardapioController = require('../controllers/cardapioController');
const path = require('path');
const multer = require('multer');
const auth = require('../middleware/auth');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('public', 'img'))
  },
  filename: function (req, file, cb) {
    let nomeImg = Date.now() + '-' + req.body.nomePizza.replace(/\s/g, '') + path.extname(file.originalname)
    cb(null, nomeImg)
  }
})
const upload = multer({ storage: storage })

let routes = express.Router();

routes.get('/ver-cardapio', auth, cardapioController.listarCardapio);

routes.get('/cadastro', cardapioController.formCadastro);
routes.post('/cadastro', upload.any(), cardapioController.salvarCadastro);

routes.delete('/deletar/:posicao', cardapioController.deletarCadastro);

routes.get('/alterar/:posicao', cardapioController.formAlteracao);
routes.put('/alterar', cardapioController.alterarPizza)

module.exports = routes;

