function encender() {
    const maquina = document.getElementById("maquina");
    const titulo = document.querySelector("h1");
    const parrafo = maquina.querySelector("p");

    maquina.style.backgroundColor = "green";
    titulo.textContent = "Maquina encendida";
    parrafo.textContent = "La maquina esta funcionando";
}

function apagar() {
    const maquina = document.getElementById("maquina");
    const titulo = document.querySelector("h1");
    const parrafo = maquina.querySelector("p");

    maquina.style.backgroundColor = "red";
    titulo.textContent = "Maquina apagada";
    parrafo.textContent = "La maquina esta detenida";
}

function añadirMensaje() {
    const maquina = document.getElementById("maquina");
    const nuevoParrafo = document.createElement("p");

    nuevoParrafo.textContent = "Mensaje extra";
    maquina.appendChild(nuevoParrafo);
}

function borrarMensaje() {
    const maquina = document.getElementById("maquina");
    const parrafos = maquina.querySelectorAll("p");

   
    if (parrafos.length > 1) {
        maquina.removeChild(parrafos[parrafos.length - 1]);
    }
}
