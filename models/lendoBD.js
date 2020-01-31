const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'jose',
    password: 'surfando1234',
    database: 'testeestagio'
})
let dados
con.query('SELECT * FROM produto', function(err, rows, fields){
    if(!err){
      console.log("resultado: ", rows)
      dados = rows
    }
    else{
      console.log( "naõ deu")
    }
  })
module.exports = dados
 