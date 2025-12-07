
let num1 = Number(prompt("Introduce el primer numero:"));
let num2 = Number(prompt("Introduce el segundo numero:"));


let operacion = prompt("¿Que operación quieres hacer? (+, -, *, /)");


let resultado;


if (operacion === "+") {
    resultado = num1 + num2;
    alert("El resultado es: " + resultado);

} else if (operacion === "-") {
    resultado = num1 - num2;
    alert("El resultado es: " + resultado);

} else if (operacion === "*") {
    resultado = num1 * num2;
    alert("El resultado es: " + resultado);

} else if (operacion === "/") {

    if (num2 === 0) {
        alert("Error: no se puede dividir entre 0.");
    } else {
        resultado = num1 / num2;
        alert("El resultado es: " + resultado);
    }

} else {
   
    alert("Operacion no valida.");
}

