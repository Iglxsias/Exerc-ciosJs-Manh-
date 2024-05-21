let titulo = window.document.getElementById("titulo")

titulo.style.color = "green"

titulo.style.fontFamily = "Montserrat"

//inicializa um variavel
let clique = 0

//funcao para contagem de cliques
const somarCliques = () => {

    //incrementou 1 valor da variavel
    clique++

    //seleciona o botao por querSelector e atualiza a quantudade de cliques no html
    document.querySelector("#botao").innerHTML = clique

}


const adicionarItem = () => {
    //criar um novo elemento li(item da lista)
    let novoItem = document.createElement("li")

    //define o texto do item
    novoItem.textContent = "Novo Item"

    //Identifica o elemento que vai ser adicionado
    let lista = document.getElementById("minhaLista")

    //Adiciona um novo item a lista
    lista.appendChild(novoItem);

}



console.log(clique)