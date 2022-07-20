const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const database = require('../../db')
//const database = require('../../db');

const Produto = database.define('produto', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    preco: {
        type: sequelize.DECIMAL,
        allowNull: false
    },
    descricao: {
        type: sequelize.STRING,
        allowNull: false
    },
    disponibilidade: {
        type: Sequelize.TINYINT(1),
        allowNull: false
    }
})

module.exports = Produto;