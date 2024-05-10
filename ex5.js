// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let number1 = parseInt(prompt("Digite um numero: "))

let number2 = parseInt(prompt("Digite outro numero: "))

let number3 = parseInt(prompt("Digite outro numero: "))

if(number1<number2 && number2<number3){
    console.log ("Ordem crescente!")
}

else {
    console.log ("Ordem decrescente!")
}