/*const dato = require('./datos');

dato('Hola mundo.');

//console.log(module);*/


const path = require('path');

const objPath = path.parse(__filename);

console.log(objPath.name);