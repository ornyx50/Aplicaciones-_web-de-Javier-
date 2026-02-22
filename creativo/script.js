
function cambiarTexto() {
  let texto = document.getElementById("texto");
  texto.textContent = "El texto ha sido cambiado ";
}

function cambiarColor() {
  let caja = document.getElementById("caja");
  caja.style.backgroundColor = "#ffd966"; 
}

function crearParrafo() {
  let caja = document.getElementById("caja");
  let nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = "Este  es el nuevo parrafo";
  caja.appendChild(nuevoParrafo);
}

function borrarParrafo() {
  let caja = document.getElementById("caja");
  let parrafos = caja.getElementsByTagName("p");

  if (parrafos.length > 1) {
    caja.removeChild(parrafos[parrafos.length - 1]);
  }

}

