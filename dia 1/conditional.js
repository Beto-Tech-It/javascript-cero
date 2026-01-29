//if, else if, else

let age = 22;

if (age == 18) {
  console.log("Con las justas llegas a mayor de edad");
} else if (age < 18 && age > 0) {
  console.log("Eres menor de edad.");
} else if (age > 18 && age < 65) {
  console.log("Eres un adulto.");
} else {
  console.log("Eres un adulto mayor.");
}


let day = 23; //0 - lunes, 1 - martes, 2 - miércoles, 3 - jueves, 4 - viernes, 5 - sábado, 6 - domingo

let dayName;

switch (day) {
  case 0:
    dayName = "Lunes";
    break;

  case 1:
    dayName = "Martes"; 
    break;

  case 2:
    dayName = "Miércoles";      
    break;

    case 3:
    dayName = "Jueves";
    break;

    case 4:
    dayName = "Viernes";
    break;

    case 5:
    dayName = "Sábado";
    break;

    case 6:
    dayName = "Domingo";
    break;

  default:
    dayName = "Inválido";
}
console.log("El día es: " + dayName);