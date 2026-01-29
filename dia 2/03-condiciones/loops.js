//cuales son los numeros pares del 0 al 10

let i = 0;

while (i <= 7){
  if (i % 2 == 0 && i != 0) {
    console.log("numero par : ", i);
  }
  i++;
}
console.log("fin del bucle");

//do while

do {
  if (i % 2 == 0) {
    console.log("numero par : ", i);
  }

  i++;
} while (i < 10);{
  console.log("fin del bucle do while");
}



// for (i = 0; i <= 10; i++) {
//   if (i % 2 == 0 && i != 0) {
//     console.log("numero par for: ", i);
//   }
// }

// console.log("fin del bucle for");