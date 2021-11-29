/*const dato = require('./datos');

dato('Hola mundo.');

//console.log(module);*/


/*const path = require('path');

const objPath = path.parse(__filename);

console.log(objPath.name);*/


const os = require('os');

let memoriaLibre = os.freemem();
let memoriaTotal = os.totalmem();

console.log(`Memoria Liobre: ${memoriaLibre}`);
console.log(`emoria Total: ${memoriaTotal}`);