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

function mudaImagem(id){
    const imagem = document.querySelector('[ed-imagem]')
    if(id === 1){        
        imagem.src='/images/camisaFrente.png'
    }
    else{imagem.src='/images/camisaCosta.png'}
         
}

function avaliacaoProduto(){
    console.log("clicou")
   
}