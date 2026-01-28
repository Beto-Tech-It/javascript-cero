class Persona {
  #nombre = "Sin nombre";
  #paisNacimiento = "Sin Pais";

  saludar() {
    console.log(`Me llamo ${this.#nombre}  y soy de  ${this.#paisNacimiento}`);
  }
//get sirve para obtener la informacion privada
  get nombre(){
    return this.#nombre;
  }
  get paisNacimiento(){
    return this.#paisNacimiento;
  }
  //sirve para enviar la informacion en un campo privado
  set nombre(valor){
    this.#nombre = valor;
  }
  set paisNacimiento(valor){
    this.#paisNacimiento = valor;
  }
}


let persona1 = new Persona();
persona1.nombre = "Beto";
persona1.paisNacimiento = "Peru";

persona1.saludar();

console.log(persona1.nombre)
console.log(persona1.paisNacimiento)
