function ponerRojo() {
    document.getElementById("rojo").style.backgroundColor = "red";
    document.getElementById("amarillo").style.backgroundColor = "gray";
    document.getElementById("verde").style.backgroundColor = "gray";
    document.getElementById("titulo").innerHTML = "LUZ ROJA";
}

function ponerAmarillo() {
    document.getElementById("rojo").style.backgroundColor = "gray";
    document.getElementById("amarillo").style.backgroundColor = "yellow";
    document.getElementById("verde").style.backgroundColor = "gray";
    document.getElementById("titulo").innerHTML = "LUZ AMARILLA";
}

function ponerVerde() {
    document.getElementById("rojo").style.backgroundColor = "gray";
    document.getElementById("amarillo").style.backgroundColor = "gray";
    document.getElementById("verde").style.backgroundColor = "green";
    document.getElementById("titulo").innerHTML = "LUZ VERDE";
}

function apagar() {
    document.getElementById("rojo").style.backgroundColor = "gray";
    document.getElementById("amarillo").style.backgroundColor = "gray";
    document.getElementById("verde").style.backgroundColor = "gray";
    document.getElementById("titulo").innerHTML = "TODO APAGADO";
}
