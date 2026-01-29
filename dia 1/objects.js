//objects
let persona = {
  nombre: "Humberto",
  edad: 25,
  ciudad: "Lima",
  profesion: "Desarrollador",
};

console.log(persona);

//acceder a las propiedades del objeto
console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Ciudad: ${persona.ciudad}`);
console.log(`Profesión: ${persona.profesion}`);

//modificar propiedades del objeto
persona.edad = 26;
persona.ciudad = "Arequipa";    
console.log(`Edad actualizada: ${persona.edad}`);
console.log(`Ciudad actualizada: ${persona.ciudad}`);


//eliminar propiedades del objeto
delete persona.profesion;
console.log(persona);

//agregar nuevas propiedades al objeto
persona.pais = "Perú";
console.log(persona);

//métodos del objeto
let persona2 = {
  nombre: "Ana",
  edad: 30,
    saludar: function() {   
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    },
    cumpleaños: function() {
    this.edad++;
    console.log(`Feliz cumpleaños ${this.nombre}! Ahora tienes ${this.edad} años.`);
    }
};

persona2.saludar();
persona2.cumpleaños();

//anidacion de objetos  

let estudiante = {
  nombre: "Carlos",
  edad: 22,
    direccion: {
    calle: "Av. Siempre Viva",
    ciudad: "Springfield",
    pais: "USA"
    },
    cursos: ["Matemáticas", "Física", "Química"]
};
console.log(`Nombre: ${estudiante.nombre}`);
console.log(`Ciudad: ${estudiante.direccion.ciudad}`);
console.log(`Cursos: ${estudiante.cursos.join(", ")}`);//unir elementos del array en una cadena
//métodos con objetos anidados
estudiante.direccion.mostrarDireccion = function() {
  console.log(`Dirección: ${this.calle}, ${this.ciudad}, ${this.pais}`);
};
estudiante.direccion.mostrarDireccion();