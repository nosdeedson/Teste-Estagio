const conexao = require('./connector')
var dado 
function buscaProduto(id) {
  
  
  conexao.query('SELECT * FROM produto WHERE id=?', [id], function (err, rows, fields) {
    if (!err) {
      console.log("resultado: ", rows)
      dado =rows.nome
      return dado
    }
    else {
      console.log("naõ deu")
    }
  })
  
  conexao.end();
}

setTimeout(()=> {
  
})

console.log(dado)