alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 50
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;



//parseInt separa o número inteiro e excluí todas as casas decimais
//Match.random() define um numero pseudo-aleatorio
// Sinal de != significa "Diferente ou não é igual"
//enquanto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // SE chute for igual ao número secreto, ele emite uma mensagem de acerto
    // SENAO ele irá para outra condição de SE e SENAO
    if (chute == numeroSecreto) {
        break;
    } else {
        if(chute > numeroSecreto) { 
            alert (`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`); 
        }
        // tentativas = tentativas + 1;
        tentativas++; 
    }
}
// Operador Ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


//if (tentativas > 1) {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}


