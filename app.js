let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let NumeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNatela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate: 1.2});
}

function exibirMensagemInicial () {
    exibirTextoNatela("h1","jogo do número secreto");
    exibirTextoNatela("p","escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector(`input`).value;
    
    if (chute == NumeroSecreto) {
        exibirTextoNatela("h1", "Acertou!");
        let palavratentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavratentativas}!`;
        exibirTextoNatela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if ( chute > NumeroSecreto) {
            exibirTextoNatela ("p", " o numero secreto é menor!");
        } else {
            exibirTextoNatela ("p", " o numero secreto é maior!");
            }
            tentativas++;
            limparCampo();
        }
    }

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt (Math.random() * numeroLimite + 1 );
    let quantidadeDeNumeroNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeNumeroNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo () {
    chute = document.querySelector (`input`);
    chute.value =  ``
}

function reiniciarJogo (){
  NumeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;  
  exibirMensagemInicial();  
  document.getElementById("reiniciar").setAttribute("disabled",true);

}