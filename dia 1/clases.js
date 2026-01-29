//clases
class Persona {
  //metodo especial
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

let persona1 = new Persona("Juan", "Perez");
let persona2 = new Persona("Ricardo", "prado");
let persona3 = new Persona("Gladys", "Ayllon");

console.log(persona1);
console.log(persona2);
console.log(persona3);

//propiedades privadas
class Person2 {
  #numeroDeCuenta;
  constructor(name, age, numeroDeCuenta) {
    this.name = name;
    this.age = age;
    this.#numeroDeCuenta = numeroDeCuenta; //propiedad privada
  }

  pay() {
    console.log(this.#numeroDeCuenta);
  }
}

const person2 = new Person2("Carlos", 30, 8838383);

console.log(person2);

//clase con metodos
class PersonaNatural{
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  caminar() {
    console.log(this.nombre + " " + this.apellido + " está caminando");
  }
}

let personaNueva = new PersonaNatural("Ana", "Gomez");

console.log(personaNueva);
personaNueva.caminar();

//GEtters y Setters
class GetSetPersona {
  #nombre;
  #apellido;
  #alias;
  #newCuenta;

  constructor(nombre, apellido, alias, newCuenta) {
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#alias = alias;
    this.#newCuenta = newCuenta;
  }
  get nombre() { //para obtener el valor
    return this.#nombre;
  }
  set nombre(nuevoNombre) {//para modificar el valor
    this.#nombre = nuevoNombre;
  }
}
let person5 = new GetSetPersona("Luis", "Lopez", "luisito", 55443322);
//console.log(person5);
console.log(person5.nombre);
person5.nombre = "Carlos";
console.log(person5.nombre);

//herencia
class Animal {
  constructor(nombre,tamaño) {
    this.nombre = nombre;
    this.tamaño = tamaño;
  }
  sound() {
    console.log("El animal hace un sonido generico");
  }
}

class Perro extends Animal {

}

let perro1 = new Perro("Firulais", 20);

console.log(perro1);
perro1.sound();

class Gato extends Animal {
    sound() {
        console.log("El gato maulla");
    }
}

let gato1 = new Gato("Garfield", 10);
console.log(gato1);
gato1.sound();

//clase con metodos estaticos

class Matematica {
    static sumar(a,b) {
        return a + b;
    }   
    static restar(a,b) {
        return a - b;
    }
}
console.log(Matematica.sumar(5,3));
console.log(Matematica.restar(10,4));