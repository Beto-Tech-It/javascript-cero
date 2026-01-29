//funciones

function myFunction() {
  console.log("Hola funcion");
}

for (let i = 0; i < 3; i++) {
  myFunction();
}

//función con parámetros

export function miFuncionConParametros(nombre, edad) {
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
}
miFuncionConParametros("Humberto", 25);

// funciones anonimas
const suma = function (a, b) {
  return a + b;
};
console.log(suma(5, 10));

// funciones flecha
const resta = (a, b) => a - b;
console.log(resta(10, 5));
// función flecha con más de una línea de código
const multiplicacion = (a, b) => {
  const resultado = a * b;
  return resultado;
};
console.log(multiplicacion(5, 4));

//funcion flecha

const dividir = (a, b) => a / b;
console.log(dividir(20, 4));

//funcion con valor por defecto

function potencia(base, exponente = 2) {
  return Math.pow(base, exponente);
}
console.log(potencia(5)); // 5 al cuadrado
console.log(potencia(5, 3)); // 5 al cubo

//funciones anidadas

function calcularAreaRectangulo(base, altura) {
  function area() {
    return base * altura;
  }
  return area();
}
console.log(calcularAreaRectangulo(2, 3));

function externo() {
  console.log("Función externa");
  function interno() {
    console.log("Función interna");
  }

  interno();
}

externo();

//foreach como función.

const valor = [1, 2, 3];
valor.forEach(value => console.log(value));