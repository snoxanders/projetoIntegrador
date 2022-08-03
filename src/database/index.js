const Sequelize = require('sequelize');
const configDB = require('../database/config/config.json');

const connection = new Sequelize(configDB)





module.exports = connection