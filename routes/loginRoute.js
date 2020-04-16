const express = require('express');
const loginController = require('../controllers/loginController');

const routes = express.Router();

routes.get('/login', loginController.viewLogin);
routes.post('/login', loginController.logar);

routes.get('/registro', loginController.viewRegistro);
routes.post('/registro', loginController.registrar);

module.exports = routes;