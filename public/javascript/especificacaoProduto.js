function paginaProduto(){

    document.querySelectorAll('a').forEach( link =>{
        const conteudo = document.getElementById('produtos')
        link.onclick = (evento)=>{
            evento.preventDefault()
            
            fetch(link.href)
                .then( resposta => resposta.text())
                .then(html => conteudo.innerHTML = '<di> teste</div>')
        }
    })
}