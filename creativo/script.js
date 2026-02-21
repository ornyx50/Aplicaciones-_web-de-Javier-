
function cambiarTexto() {
  const texto = document.getElementById("texto");
  texto.textContent = "El texto ha sido cambiado ✨";
}

function cambiarColor() {
  const caja = document.getElementById("caja");
  caja.style.backgroundColor = "#ffd966"; 
}

function crearParrafo() {
  const caja = document.getElementById("caja");
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = "Este es un nuevo párrafo mágico 🪄";
  caja.appendChild(nuevoParrafo);
}

function borrarParrafo() {
  const caja = document.getElementById("caja");
  const parrafos = caja.getElementsByTagName("p");

  if (parrafos.length > 1) {
    caja.removeChild(parrafos[parrafos.length - 1]);
  }
}