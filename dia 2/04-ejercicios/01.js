function numeroMayor(a, b) {
  if (a > b) {
    console.log("el numero mayor es: ", a);
    return a;
  } else if (b > a) {
    console.log("el numero mayor es: ", b);
    return b;
  } else {
    console.log("los numeros son iguales");
  }
}

let mayor = numeroMayor(55, 44);
