/*//ES5 - Variables
var nombre = "Caro";
console.log(nombre);
nombre = "Isa";
console.log(nombre);

//ES6+ - Variables
const nombre6 = "Migui"; // no se puede cambiar la varible
let edad = 24;
console.log(nombre6);
console.log(edad);
edad = 30;
console.log(edad);*/



//Funciones flecha
//Funciones en ES5

/*const years = [2000, 2005, 2008, 2012];

var edad5 = years.map(function(el){
    return 2021 - el;
})
console.log(edad5);

//Funciones en ES6 de tipo felcha
let edad6 = years.map((el) => {
    return 2019 - el;
});
console.log(edad6);
//Otra forma
edad6 = years.map(el => 2019 - el);
console.log(edad6);*/



//Funciones Callback
/*function Mensaje (callback){
    console.log('Mensaje antes de la llamada callback. ');
    callback();
}
function Saludo (){
    console.log('Saludo despues de la llamada al calback. ');
}
Mensaje(Saludo);
//Otro ejemplo
function Sumar (num1, num2, callback){
    let Resultado = num1 + num2;
    callback(Resultado);
}
function Resultado(res){
    console.log(res);
}
Sumar(5, 8,  Resultado);
//otra
setTimeout(function (){
console.log('Esto se va a ejecutar despues de 3 segundos');
}, 3000);*/

//const mensaje = new Promise ((resolve, reject) => {
function mensaje (){
    return new Promise((resolve, reject) => {    
        setTimeout(() => {
            if(true)
                resolve('Esto se va a ejecutar despues de 3 segundos')
            else
                reject('Hubo un error');
            }, 3000);
    });
}

async function llamadaAsync(){
    console.log('Llamada...');
    const resultado = await mensaje();
    return resultado;
}

llamadaAsync().then(x => console.log(x)).catch(e => console.log(e));
/*mensaje
    .then(msj => {
        console.log(msj);
    })
    .catch(error => {
        console.log(error);
    })*/



