listaDeNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1



function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    let imagem = document.getElementById('imagem-centro');

    imagem.src = "./img/analise.jpg"; // Substitua "imagem-inicial.jpg" pelo caminho da sua nova imagem
    imagem.style.width = "450px"; // Ajuste a largura da imagem conforme necessário
    imagem.style.height = "auto"; // Mantém a proporção da altura
}

function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Jogo do bicho');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

   

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavratentativa = tentativas > 1 ? 'tentativas' : ' tentativa'
        let mensagententativa = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}!`;
                exibirTextoNaTela('p', mensagententativa);

                let imagem = document.getElementById('imagem-centro');
                imagem.src = "./img/images.jpg"; // Substitua pelo caminho da nova imagem
                imagem.style.width = "500px"; // Define a largura
                 imagem.style.height = "auto"; // Ajusta a altura automaticamente

                document.getElementById('reiniciar').removeAttribute ('disabled');
        } else {
                if (chute > numeroSecreto) {
                        exibirTextoNaTela('h1','Calma aí paizão')
                        exibirTextoNaTela('p', 'O número secreto é menor');
                        
                } else {
                        exibirTextoNaTela('h1', 'Tente outra vez')
                        exibirTextoNaTela('p', 'O número secreto é maior');
                }
                tentativas++
                limparCampo()
        }
}




function gerarNumeroAleatorio() {
        let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
        let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; 

        if(quantidadeDeElementosNaLista == numeroLimite) {
                listaDeNumerosSorteados = []

        }
        if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
            return gerarNumeroAleatorio();
        } else {
                listaDeNumerosSorteados.push(numeroEscolhido);
                console.log(listaDeNumerosSorteados)
               return numeroEscolhido;
        }
    }


function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
}

function reiniciarjogo() {
        numeroSecreto = gerarNumeroAleatorio();
        tentativas = 1;
        exibirMensagemInicial();
        limparCampo();
}