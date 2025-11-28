let distancia = 1500; 

if (typeof distancia !== "number" || distancia < 0) {
    console.log("Distancia inválida. Debe ser un número mayor o igual a 0.");
} else if(distancia <= 1000){
    console.log("El medio de transporte adecuado es: pie");
} else if(distancia <= 10000){
    console.log("El medio de transporte adecuado es: bicicleta");
} else if(distancia <= 30000){
    console.log("El medio de transporte adecuado es: colectivo");
} else if(distancia <= 100000){
    console.log("El medio de transporte adecuado es: auto");
} else {
    console.log("El medio de transporte adecuado es: avión");
}