//Serie de Fibonacci
// 1 1 2 3 5 8 13 21 34...

const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path/posix');

let crearSerie = (cantidad) => {
    
    return new Promise((resolve, rejects) =>{
        let fibo1 = 1;
        let fibo2 = 1;
        let serie = '';

        serie += `${fibo1}\t`;

        for (let i=2; i<= cantidad-1; i++){
            serie += `${fibo2}\t`;
            fibo2 = fibo1 + fibo2;
            fibo1 = fibo2 - fibo1;
        }

        fs.writeFile('fibonacci.txt', serie, (err) => {
            if(err)
                rejects('Error al crear el archivo');
            else
                resolve('El archivo fue creado con exito');
        });

    })
    
}

module.exports = {
    crearSerie
}