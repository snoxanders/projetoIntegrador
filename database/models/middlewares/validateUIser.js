const { body } = require('express-validator');

const loginAuth = [  
    body("emailCliente").notEmpty().withMessage('Digite Um Email Valido').isEmail(),
    body("senhaCliente").notEmpty().withMessage('Digite Uma Senha Valida'),
    body("cpfCliente").notEmpty().withMessage('Digite Um CPF valido'),
];

module.exports = loginAuth
