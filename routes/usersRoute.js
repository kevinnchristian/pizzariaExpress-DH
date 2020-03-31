const express = require('express');

let route = express.Router();


route.get('/:nome', (req, res) => {
    let {nome} = req.params;
    res.render('usuario', {nome});
});

module.exports = route;