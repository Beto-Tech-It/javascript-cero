function nombreResolucion(ancho, alto) {
  if (ancho >= 1280 && ancho < 1920 && alto >= 720 && alto < 1080) {
    //return "HD";
    console.log("HD");
  } else if (ancho >= 1920 && ancho < 2560 && alto >= 1080 && alto < 1440) {
    //return "Full HD";
    console.log("Full HD");
  } else if (ancho >= 2560 && ancho < 3840 && alto >= 1440 && alto < 2160) {
    //return "WQHD";
    console.log("WQHD");
  } else if (ancho >= 3840 && ancho < 7680 && alto >= 2160 && alto < 4320) {
    console.log("4k");
    //return "4k";
  } else if (ancho >= 7680 && ancho < 15360 && alto >= 4320 && alto < 8640) {
    console.log("8k");
    //return "8k";
  } else {
    console.log("Resolucion no reconocida");
    //return "false";
  }
}
let resolucion = nombreResolucion(1300, 1800);
console.log("La resolucion es: ", resolucion);
