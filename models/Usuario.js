const fs = require('fs');
const path = require('path');

const arquivoUsuario = path.join('usuarios.json');

function cadastrarUsuario(nome, email, senha) {
    let listaDeUsuarios = JSON.parse(fs.readFileSync(arquivoUsuario, {encoding: 'utf-8'}));

    listaDeUsuarios.push({
        nome,
        email,
        senha
    });

    fs.writeFileSync(arquivoUsuario, JSON.stringify(listaDeUsuarios));
}

function buscarUsuario(email) {
  let listaDeUsuarios = JSON.parse(fs.readFileSync(arquivoUsuario, {encoding: 'utf-8'}));

  for (let i = 0; i < listaDeUsuarios.length; i++) {
    let usuario = listaDeUsuarios[i];
    if(usuario.email == email) {
      return usuario;
    }
  }

  return false;

}

module.exports = { cadastrarUsuario, buscarUsuario }