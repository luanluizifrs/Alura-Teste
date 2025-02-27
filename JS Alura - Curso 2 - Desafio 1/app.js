let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function MensagemNoConsole() {
    console.log('O botão foi clicado!');
}

function MensagemdeAlerta() {
    alert('Eu amo JS');
}

function ExibirumPrompt() {
    let nomeDaCidade = prompt ('Digite o nome da cidade do Brasil:');
    alert (`Estive em ${nomeDaCidade} e lembrei de você <3`);
}

function SomatoriadeDois() {
    let primeiroNumero = parseInt(prompt('Digite um numero'));
    let segundoNumero = parseInt(prompt('Digite um outro numero'));
    let resultado = primeiroNumero + segundoNumero;
    alert (` A soma de ${primeiroNumero} e ${segundoNumero} é ${resultado}`);


}