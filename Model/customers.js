const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const customer = sequelize.define('customer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    emailId: Sequelize.STRING,
    contactNumber: Sequelize.BIGINT,
    imageUrl: Sequelize.STRING
})

module.exports = customer;