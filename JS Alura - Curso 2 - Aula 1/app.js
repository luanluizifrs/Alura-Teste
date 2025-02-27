let listaNumSort = [];
let quantidadeElementos = 100;
let numAleat = gerarNumAleat();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número secreto da Alura');
    exibirTextoNaTela('p', 'Escolher um número entre 1 e 100');
}
exibirInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numAleat) {
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}!`;
        exibirTextoNaTela ('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        limparcampo();
    } else {
        if (chute > numAleat) {
            exibirTextoNaTela ('p','Você errou, o número secreto é menor');
        } else {
            exibirTextoNaTela ('p', 'Você errou, o número secreto é maior');
        }
        tentativa++;
        
    }
}

function gerarNumAleat() {
    let numeroEscolhido = parseInt(Math.random() * quantidadeElementos + 1);
    let quantElementosLista = listaNumSort.length;

    if (quantElementosLista == quantidadeElementos){
        listaNumSort = [];
    }
    if (listaNumSort.includes(numeroEscolhido)){
        return gerarNumAleat();
    } else{
        listaNumSort.push(numeroEscolhido);
        console.log(listaNumSort);
        return numeroEscolhido;
    }
}

function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarjogo() {
    numAleat = gerarNumAleat();
    limparcampo();
    tentativa = 1;
    exibirInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}