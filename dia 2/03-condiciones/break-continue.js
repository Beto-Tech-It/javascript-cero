let i = 0;

while (i <= 10) {
  i++;
  if (i == 5) {
    continue;
  }
  console.log("numero: ", i);

  if (i == 8) {
    console.log("saliendo de la interacion");
    break;
  }
}
