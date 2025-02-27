//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    const inputNome = document.getElementById('amigo');
    const nome = inputNome.value.trim(); // Remove espaços em branco no início e fim

    // Verificar se o nome contém apenas letras (não números e caracteres especiais)
    const regex =  /^[A-Za-záéíóúàèìòùâêîôûãõäëïöüçÇ\s]+$/;

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
    } else if (!regex.test(nome)) {
        alert("O nome deve conter apenas letras. Números e caracteres especiais não são permitidos.");
    } else {
        amigos.push(nome);
        atualizarListaAmigos();
    }

    // Limpar o campo de input após adicionar
    inputNome.value = "";
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione ao menos um amigo para sortear.");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Amigo sorteado: ${sorteado}`;
    document.getElementById('button-reset').disabled = false;
}

function resetarSorteio() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').textContent = "";
    document.getElementById('button-reset').disabled = true;
}
