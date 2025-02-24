// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosDisponibles = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(nombre);
    amigosDisponibles.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigosDisponibles.length === 0) {
        alert("Todos los amigos han sido sorteados.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
    let amigoSorteado = amigosDisponibles.splice(indiceAleatorio, 1)[0];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo elegido es: ${amigoSorteado}</li>`;
    
    // Ocultar la lista de amigos
    document.getElementById("listaAmigos").style.display = "none";
}
