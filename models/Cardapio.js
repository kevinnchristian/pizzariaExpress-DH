let cardapio = [
    {nome: "Calamussa", preco: "R$30,00", img: 'pizzaCalamussa.jpg'},
    {nome: "Frango com Catupiry", preco: "R$35,00", img: 'pizza3queijos.jpg'},
    {nome: "Três Queijos", preco: "R$40,00", img: 'pizzaFrangoCatupiry.jpg'},
    {nome: "Três Queijos", preco: "R$40,00", img: 'pizzaFrangoCatupiry.jpg'},
    {nome: "Frango com Catupiry", preco: "R$35,00", img: 'pizza3queijos.jpg'},
    {nome: "Calamussa", preco: "R$30,00", img: 'pizzaCalamussa.jpg'}
    
    
];

function listarCardapio () {
    return cardapio;
};

module.exports = { listarCardapio }