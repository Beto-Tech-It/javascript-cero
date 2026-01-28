//personaje de tv

let personaje = {
    nombre: "tanjiro",
    edad: 15,
    profesion: "cazador de demonios",
    arma: "espada nichirin",
    habilidad: "respiracion del agua"
};

console.log(personaje); 
console.log(personaje.profesion);

personaje.nombre = "zenitsu";
console.log(personaje);

delete personaje.arma;
console.log(personaje);