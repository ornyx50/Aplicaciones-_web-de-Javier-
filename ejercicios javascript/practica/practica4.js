const USUARIO_CORRECTO = "admin";
const PASSWORD_CORRECTO = "1234";



let usuario =  prompt("cual es tu nombre de usuario")

if (usuario != USUARIO_CORRECTO){
        alert("usuario incorrecto")
         let intentos = 0;
  let password;
  let acceso = false;

}while (intentos < 3) {
    password = prompt("Introduce la contraseña:");
    if (password === PASSWORD_CORRECTO) {
      alert("Acceso concedido");
      acceso = true;
      break; 
    } else {
      intentos++;
      if (intentos < 3) {
        alert("Contraseña incorrecta. Te quedan " + (3 - intentos) + " intento(s).");
      }
    }
  }

  if (!acceso) {
    
    alert("El usuario queda bloqueado. Contacte con el administrador del sitio.");
  }





