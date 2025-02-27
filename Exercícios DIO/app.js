alert ('Boas Vindas');
let pesoIMC = parseFloat(prompt("Insira seu peso aqui: "));
let altIMC = parseFloat(prompt("Insira sua altura aqui: "));

indiceIMC = pesoIMC / (altIMC ** 2)
console.log (indiceIMC);


if (indiceIMC < 18.5) {
    alert ("Você está abaixo do peso");
}else if(indiceIMC >= 18.5 && indiceIMC <= 24.9){
    alert ("Você está no peso ideal");
}else if(indiceIMC >= 25 && indiceIMC <= 29.9){
    alert ("Levemente acima do peso");
}else if(indiceIMC >= 30 && indiceIMC <= 34.9){
    alert ("Você tem obesidade grau 1");
}else if(indiceIMC >= 35 && indiceIMC <= 39.9){
    alert ("Você tem obesidade grau 2 (severa)");
}else if(indiceIMC > 40){
    alert ("Você tem obesidade grau 3 (mórbida)");
}
