console.log("hola mundo desde console.js");

console.error("esto es un error", new Error("conexion fallida"));

console.warn("esto es una advertencia");

console.info("esto es una informacion importante");

let data = {
    nombre: "Humberto",
    edad: 25,
    profesion: "developer"
}

console.table(data);

console.dir(data);

console.group("Mi grupo de datos");
console.log("dato 1");
console.log("dato 2");
console.log("dato 3");
console.groupEnd();

console.time("miTiempo");
//codigo a medir
for (let i = 0; i < 1000000; i++) {

}
console.timeEnd("miTiempo");

let x=5;

console.assert( x > 3 , "el valor de x es mayor que 3");
console.assert( x < 3 , "el valor de x es menor que 3");
