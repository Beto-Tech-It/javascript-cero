class Usuario {
  constructor(nombre, apellido, edad, signoZodiacal) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.signoZodiacal = signoZodiacal;
  }
  saludar() {
    console.log("Hola mi nombre completo es " + this.nombre + " "+ this.apellido + " , tengo " + this.edad + " y mi signo zodiacal es " + this.signoZodiacal);
  }
}

let usuario1 = new Usuario("Humberto", "Palomino Ayllón", 36, "Aries");
console.log(usuario1);
usuario1.saludar();

class Empleado extends Usuario{
    constructor(nombre, apellido, edad, signoZodiacal, id, profesion, antiguedad){
        
        super(nombre, apellido, edad, signoZodiacal)
    
        this.id = id;
        this.profesion = profesion;
        this.antiguedad = antiguedad;
    }

    mostrarDatos(){
        console.log("Tengo el id " + this.id + " y tengo la profesion de " + this.profesion + " con un tiempo de trabajo de " + this.antiguedad + " años");

    }
}
 let empleado1 = new Empleado("Humberto", "Palomino Ayllón", 36, "Aries", 132768, "Ingeniero", 8);
    console.log(empleado1);
    empleado1.saludar();
    empleado1.mostrarDatos();

class Subordinado extends Empleado
{
    constructor(nombre, apellido, edad, signoZodiacal, id, profesion, antiguedad, hobby){
        super(nombre, apellido, edad, signoZodiacal, id, profesion, antiguedad)
        this.hobby  = hobby;
    }

    llamar(){
        console.log("me llamo " + this.nombre + " y mi hobby es " + this.hobby);
    }

}

let subordinado1 = new Subordinado("juan", "Perez", 25, "Leo", 12345, "Programador", 2, "jugar futbol")

console.log(subordinado1);
subordinado1.saludar();
subordinado1.llamar();