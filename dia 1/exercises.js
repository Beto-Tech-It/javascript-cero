const person = {
    name: "humberto",
    age: 25,
    profesion: "developer",
    pelicula: "inception",
    saludar: function() {
        console.log("Me llamo " + this.name + " y tengo " + this.age + " años" + " y de profesion soy " + this.profesion);
    },
    ojos: {
        color: "marron",
        observar: function() {
            console.log("Estoy observando el color de tus ojos que es " + this.color);
        }
    
    },
    mirar: function() {
        console.log( "Estoy viendo la pelicula " + this.pelicula );

    },
};

person.ojos.observar();


/*
console.log(person);
person.saludar();

person.talla = "1.75m";
console.log(person);

//delete person.talla;
//console.log(person);

person.hobby = "bailar";    

console.log("mi hobby es "+ person.hobby)
person.mirar();
*/
