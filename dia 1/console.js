console.log("hola mundo desde console.js");//uso de console

//console.error("esto es un error", new Error("conexion fallida"));//mensaje de error

console.warn("esto es una advertencia");//mensaje de advertencia

console.info("esto es una informacion importante");//mensaje de informacion

let data = { //objeto
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
for (let i = 0; i < 10; i++) {

}
console.timeEnd("miTiempo");

let x=2;

console.assert( x > 3 , "el valor de x es menor que 3");//no muestra nada porque la condicion es verdadera
console.assert( x < 3 , "el valor de x es mayor que 3");//muestra el mensaje porque la condicion es falsa
