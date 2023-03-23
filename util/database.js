const Sequelize = require('sequelize');

const sequelize = new Sequelize('node', 'tmdev', '12345', {
    dialect: 'postgres',
    host: 'localhost'
})

module.exports = sequelize;