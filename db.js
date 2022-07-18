const Sequelize = require('sequelize');
const sequelize = new Sequelize('CRUD', 'root', 'user', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

module.exports = sequelize;