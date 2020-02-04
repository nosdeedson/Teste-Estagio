function paginaProduto(){

    document.querySelectorAll('[edlink]').forEach( link =>{
        const conteudo = document.getElementById('produtos')
        link.onclick = (evento)=>{
            evento.preventDefault()
            
            fetch(link.href)
                .then( resposta => resposta.text())
                .then(html => conteudo.innerHTML = html)
        }
    })
}

function configurarVideo(){
    const video = document.getElementById("meuVideo")
    video.oncontextmenu = () => false
}