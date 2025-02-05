// função para salvar amigos.

let amigos = [];

function salvarAmigos() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome == "") {
        alert ("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome); //adiciona o nome à Array

    input.value = "";

    atualizarLista();
}


//função para atualizar a lista.

function atualizarLista() {
    const listaDeAmigos = document.getElementById("listaAmigos");

    listaDeAmigos.innerHTML = "";

    for (let amigo of amigos){
        const item = document.createElement ("li");
        item.textContent = amigo;
        listaDeAmigos.appendChild(item);
    }
}


// função para sortear os amigos.

function sortearAmigo() {
    const sorteio = document.getElementById("resultadoSorteio");

    if(amigos.length == 0) {
        resultado.textContent = "Você ainda não adicionou amigos!";
        return;
    }

    const amigoAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[amigoAleatorio];

    resultado.textContent = `Seu amigo secreto é: ${amigoSorteado}`;
}


// botões

document.getElementById("addButton").addEventListener("click", salvarAmigos);

document.getElementById("sortearButton").addEventListener("click", sortearAmigo);