function exercicioSemana() {
    let number = prompt("Digite um numero de 1 a 7 referente a um dia da semana: ")

if(number == "1"){
    console.log("Segunda Feira")
}
if(number == "2"){
    console.log("Terça Feira")
}
if(number == "3"){
    console.log("Quarta Feira")
}
if(number == "4"){
    console.log("Quinta Feira")
}
if(number == "5"){
    console.log("Sexta Feira")
}
if(number == "6"){
    console.log("Sábado")
}
if(number == "7"){
    console.log("Domingo")
}


}

function exercicioParouImpar() {
    let number = prompt("Digite um número: ")

    if (number % 2 == 0){
        console.log ("O numero e par")
    }
    else(console.log ("o numero e impar"))

}

function exercicioDescontoProduto() {
    let valor = parseFloat (prompt ("Valor total da compra: "))

if (valor <= 100.00) {
    console.log ("Sem desconto!")
    console.log (valor)
}

else if (valor > 100.01 && valor < 200.00) {
    console.log ("10% de desconto!")
    let desconto = valor * (10 / 100)
    let final = valor - desconto
    console.log ("Valor: R$ " + final.toFixed(2))
}

else if (valor > 200.00) {
    console.log ("20% de desconto!")
    let desconto = valor * (20 / 100)
    let final = valor - desconto
    console.log ("Valor: R$ " + final.toFixed(2))

}

}

function exercicioLoopNumerosPares() {
for(let num = 1; num <=10; num++){
    if(num%2 == 0){
        console.log(num);
    }
}

console.log("------------------------")

for(let cont = 2; cont <= 10; cont+=2){
    console.log(cont)
}

}

function exercicioLoopContagemRegressiva() {
    let numero = parseInt(prompt("Digite um número para a contagem regressiva: "));

console.log("Contagem regressiva está começando em: " + numero);

while(numero >= 0){
    console.log(numero);
    numero--;
}

console.log("Contagem regressiva finalizada!");

}

function exercicioLoopMaiorDeIdade() {
    let idade = parseInt(prompt("Informe sua idade: "))

while(idade < 18){
    idade = parseInt(prompt("Você é menor de idade. Por favor, digte sua idade novamente: "));
}

console.log("Você é maior de idade. Sua idade é: " + idade);

}

let opcao;

do {

    opcao = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Funçao Semana \n\n2 - Funçao Par/Impar \n\n3 - Funçao Desconto \n\n4 - Funçao Loop Numeros Pares \n\n5 - Funçao Loop Contagem Regressiva \n\n6 - Funçao Loop Maior de Idade")
    
    switch (opcao) {
        case"1":
            exercicioSemana()
            break;
    
        case"2":
            exercicioParouImpar()
           break;
        
        case"3":
           exercicioDescontoProduto()
           break;
    
        case"4":
           exercicioLoopNumerosPares()
           break;
    
        case"5":
            exercicioLoopContagemRegressiva()
            break;
    
        case"6":
            exercicioLoopMaiorDeIdade()
            break;
    
    
        default:
            break;
    
    }

} while ("opcao != sair")



