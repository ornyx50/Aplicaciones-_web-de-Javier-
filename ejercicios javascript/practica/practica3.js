function generarNumero() {
    
    let aleatorio = Math.floor(Math.random() * 100) + 1;

    alert("Tu numero aleatorio es: " + aleatorio);
}

let respuesta = "s";

while (respuesta === "s" || respuesta === "S") {
    generarNumero();
    respuesta = prompt("¿Otro? (s/n)");
    
   
   
   


}
