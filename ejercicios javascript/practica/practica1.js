
let nombre = prompt("¿Como te llamas?");
let nacimiento = prompt("¿En que año naciste?");


let anioNacimiento = Number(nacimiento);

let anioActual = new Date().getFullYear();

let edad = anioActual - anioNacimiento;


alert("Hola " + nombre + ", tienes " + edad + " años.");
