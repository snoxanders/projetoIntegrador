const sequelize = require('sequelize');
const Sequelize = require('sequelize');
//const database = require('../../db');

const Produto = sequelize.define('produto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    disponibilidade: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    }
})

module.exports = Produto;