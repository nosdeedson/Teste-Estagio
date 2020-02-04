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
    else{
        imagem.src='/images/camisaCosta.png'
    }
         
}

function avaliacaoProduto(id){
    /* */
    const imagem = document.querySelectorAll('[ed-star]')
    imagem.forEach( elemento =>{
        for( let i = 0; i < id; i++){
            imagem[i].src='/images/estrelaAvaliada.png'
        }
    })
    const texto = document.getElementById('clicou')
    texto.style.fontSize='20px'
    texto.innerHTML= id
}