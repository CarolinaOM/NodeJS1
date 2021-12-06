const { json } = require('express');
const express = require ('express');
const app = express();

app.use(express,json);

const usuarios = [
    {id:1, nombre:'Caro'},
    {id:2, nombre:'Mari'},
    {id:3, nombre:'Ana'}
];

app.get('/', (req, res) => {
    res.send('Hola Mundo dede Express.');
});

app.get('/api/usuarios', (req, res) => {
    res.send(['caro', 'maria', 'ana'])
});

app.get('/api/usuarios/:id', (req, res)=>{
    let usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if(!usuario) res.status(404).send('El usuario no fue encoentrado');
    res.send(usuario);
});

app.post('/api/usuarios',(req, res)=> {
    const usuario = {
        id: usuarios.length + 1,
        nombre: req.body.nombre
    };
    usuarios.push(usuarios);
});

const port = process.env.PORT ||3000;
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}...`);
})