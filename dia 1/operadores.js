//operadores en JavaScript
//operadores aritméticos
let a = 10;
let b = 5;
console.log("Suma: " + (a + b)); //15
console.log("Resta: " + (a - b)); //5
console.log("Multiplicación: " + a * b); //50
console.log("División: " + a / b); //2
console.log("Módulo: " + (a % b)); //0
console.log("Exponente: " + a ** b); //100000

a++; //incremento
console.log("Incremento: " + a); //11

b--; //decremento
console.log("Decremento: " + b); //4

console.log(a);
console.log(b);

//operadores de asignación
let c = 20;
c = c + 5 // c += 5; //asignación suma   
c = c - 3 // c -= 3; //asignación resta
c = c * 2 // c *= 2; //asignación multiplicación
c = c / 4 // c /= 4; //asignación división
console.log("Asignación suma: " + c); //11

//operadores de comparación
let x = 10;
let y = 5;
console.log("Igualdad: " + (x == y)); //false
console.log("Desigualdad: " + (x != y)); //true
console.log("Mayor que: " + (x > y)); //true
console.log("Menor que: " + (x < y)); //false
console.log("Mayor o igual que: " + (x >= y)); //true
console.log("Menor o igual que: " + (x <= y)); //false         

//operadores lógicos 

console.log("AND lógico: " + (6 > 5 && 44 < 10)); //false
console.log("OR lógico: " + (6 < 5 || 4 < 10)); //true
console.log("NOT lógico: " + !(6 > 5)); //false
