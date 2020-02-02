const mysql = require('mysql')

const con= mysql.createConnection({
    host: 'localhost',
    user: 'jose',
    password: 'surfando1234',
    database: 'testeestagio'
})

module.exports = con

