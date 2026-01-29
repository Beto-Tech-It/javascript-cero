let myName = "Humberto";
let nameFull = myName + " Palomino";
console.log(nameFull);

console.log(nameFull.length); //longitud de la cadena

console.log(nameFull.toUpperCase()); //mayúsculas
console.log(nameFull.toLowerCase()); //minúsculas   
console.log(nameFull.indexOf("Palomino")); //posición de la subcadena
console.log(nameFull.slice(0, 7)); //subcadena desde el índice 0 hasta el 8
console.log(nameFull.includes("Juan"));   //verificar si incluye subcadena
console.log(nameFull.replace("Humberto", "Carlos")); //reemplazar subcadena


//plantillas literales (template literals)
let age = 25;   
let greeting = `Hola, mi nombre es ${myName} y tengo ${age} años.`;
console.log(greeting);