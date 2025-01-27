//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    let listaHTML = '';
    let cont = 0;
    while (texto.length > cont) {
        listaHTML += `<li>${texto[cont]}</li>`;
        cont++;
    }
    campo.innerHTML = listaHTML;
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let nomeInput = document.querySelector('input');
    let nome = nomeInput.value;

    if (nome !== '') {
        listaDeAmigos.push(nome);
        exibirNaTela('#listaAmigos', listaDeAmigos);
        limparCampo();
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

function limparCampo() {
    let nomeInput = document.querySelector('input');
    nomeInput.value = '';
}

function sortear(lista) {
    let indiceAleatorio = Math.floor(Math.random() * lista.length);
    return lista[indiceAleatorio];
}

function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert('Lista Vazia!');
    } else {
        let amigoSorteado = sortear(listaDeAmigos);
        exibirTextoNaTela('#resultado', `O amigo secreto sorteado é: ${amigoSorteado}`);
    }
}
