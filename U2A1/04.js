let numeros = [7, 15, 8, 22, 2, 19];
let mayor = numeros[0]; 

for(let i = 1; i < numeros.length; i++){
    if(numeros[i] > mayor){
        mayor = numeros[i];
    }
}

console.log(`El número mayor es: ${mayor}`);
