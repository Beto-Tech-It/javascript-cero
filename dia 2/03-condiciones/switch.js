let accion = "listar";

switch (accion) {
  case "agregar":
    console.log("agregando un elemento");
    break;
  case "borrar":
    console.log("borrando un elemento");
    break;
  case "listar":
    console.log("listando un elemento");    
    break;
  default:
    console.log("accion no reconocida");
    break;
}


let numero = 5;
switch (numero) {
  case 1:
    console.log("el numero es 1");  
    break;
    case 3:
    console.log("el numero es 3");
    break;
    case 5:
    console.log("el numero es 5");
    break;
    default:
    console.log("numero no reconocido");
    break;
}