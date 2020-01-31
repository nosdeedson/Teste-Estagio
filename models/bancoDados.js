const Sequelize = require("sequelize")

const sequelize = new Sequelize('testeEstagio', 'edson', 'surfando123', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports={
    Sequelize: Sequelize,
    sequelize: sequelize
}