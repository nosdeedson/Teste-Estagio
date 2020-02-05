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

    const imagem = document.getElementsByClassName('star')

    const estrela = Array.from(imagem)

    for( let i = 0; i < 5; i++){
        imagem[i].src="/images/estrelaAntesAvaliacao.png"
    }

    for( let j = 0; j < id; j++){
        imagem[j].src="/images/estrelaAvaliada.png"
    }
}