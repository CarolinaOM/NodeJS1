/*const dato = require('./datos');

dato('Hola mundo.');

//console.log(module);*/


/*const path = require('path');

const objPath = path.parse(__filename);

console.log(objPath.name);*/


/*const os = require('os');

let memoriaLibre = os.freemem();
let memoriaTotal = os.totalmem();

console.log(`Memoria Liobre: ${memoriaLibre}`);
console.log(`emoria Total: ${memoriaTotal}`);*/



/*const fs = require('fs');

//const archivos = fs. readdirSync('./');
//console.log(archivos);

fs.readdir('./',function(err, files){
    if(err) console.log('Error',err);
    else console.log('Resultado', files);
})*/




//Moddulos de Eventos

/*const EventEmitter = require('events');
const emitter = new EventEmitter();
const mensajeLoger = 'MensajeLoger';

//Registrar el Listener
emitter.on(mensajeLoger, function(arg){
    console.log('Listener llamado...', arg);
})

//Registrar el evento 
emitter.emit(mensajeLoger, {id:1, url:'http://google.com'});*/



//Modulo HTTP

const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Hola mundo');
        res.end();
    }
    if(req.url === '/api/productos'){
        res.write(JSON.stringify(['mouse', 'teclado', 'parlante']));
        res.end();
    };
});

//server.on('connection',(puerto,)=>{
//   console.log('Nueva conexion...');
//})

server.listen(3000);
console.log('Servidor escuchado en el puerto 3000...');

