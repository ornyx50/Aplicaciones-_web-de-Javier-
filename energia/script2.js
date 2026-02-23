function encender() {
    let maquina = document.getElementById("maquina");
    let titulo = document.querySelector("h1");
    let parrafo = maquina.querySelector("p");

    maquina.style.backgroundColor = "green";
    titulo.textContent = "Máquina encendida";
    parrafo.textContent = "La máquina está en funcionamiento";
}

function apagar() {
    let maquina = document.getElementById("maquina");
    let titulo = document.querySelector("h1");
    let parrafo = maquina.querySelector("p");

    maquina.style.backgroundColor = "red";
    titulo.textContent = "Máquina apagada";
    parrafo.textContent = "La máquina está detenida";
}

function añadirMensaje() {
    let maquina = document.getElementById("maquina");
    let nuevoParrafo = document.createElement("p");

    nuevoParrafo.textContent = "Mensaje extra";
    maquina.appendChild(nuevoParrafo);
}

function borrarMensaje() {
    let maquina = document.getElementById("maquina");
    let parrafos = maquina.querySelectorAll("p");

    if (parrafos.length > 1) {
        maquina.removeChild(parrafos[parrafos.length - 1]);
    }
}
