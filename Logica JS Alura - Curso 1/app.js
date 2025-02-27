alert('Boas vindas');
let numeroMaximo = 500
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1);
console.log (numeroSecreto);
let chute ;
let tentativas = 1;


console.log ("Aqui o cabra coloca o código certo beleza?")

// while é enquanto chute não for igual ao ns ele vai se repetir (Estrutura de repetição)
while (chute != numeroSecreto){
    chute = prompt(`escolha um número de 1 à ${numeroMaximo}`);
     // se chute for igual ao numero secreto
     if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor que o ${chute}`); 
        } else {
            alert(`O número secreto é maior que o ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let aTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${aTentativa}`);

// Transformei tudo aqui abaixo em operador ternário (aqui acima)
//if (tentativas > 1) {
//    alert (`isso aí voccê descobriu ${numeroSecreto} com ${tentativas} tentativas`);
//    } else {
//    alert(`isso aí você descobriu ${numeroSecreto} com ${tentativas} tentativa`);
//}

