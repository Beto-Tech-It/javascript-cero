//try-catch

let miObjeto

//codigo que intenta ejecutar el error
    try {
        console.log(miObjeto.nombre);
    } catch (error){
        console.log("Ha ocurrido un error: " + error.message);
    }
