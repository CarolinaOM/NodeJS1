const { json } = require('express');
const express = require ('express');
const Joi = require('@hapi/joi');
const app = express();

app.use(express.json());

const usuarios = [
    {id:1, nombre:'Caro'},
    {id:2, nombre:'Mari'},
    {id:3, nombre:'Ana'}
];

app.get('/', (req, res) => {
    res.send('Hola Mundo dede Express.');
});

app.get('/api/usuarios', (req, res) => {
    res.send(usuarios);
});

app.get('/api/usuarios/:id', (req, res)=>{
    let usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if(!usuario) res.status(404).send('El usuario no fue encoentrado');
    res.send(usuario);
});

app.post('/api/usuarios',(req, res)=> {
    
    const schema = Joi.object({
        nombre: Joi.string().min(3).required()
    });
    const {error, value} = schema.validate({nombre: req.body.nombre });
    if(!error){
        const usuario = {
            id: usuarios.length + 1,
            nombre: value.nombre
        };
        usuarios.push(usuario);
        res.send(usuario);
    }else{
        const mensaje = error.details[0].message;
        res.status(400).send(mensaje);
    }
    

});

app.put('/api/usuarios/:id', (req, res) => {
    //Encontrar si existe el objeto usuario
    let usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if(!usuario) res.status(400).send('El usuario no fue encontrado');

    const schema = Joi.object({
        nombre: Joi.string().min(3).required()
    });
    
    const {error, value} = schema.validate({nombre: req.body.nombre })
    if(error){
        const mensaje = error.details[0].message;
        res.status(400).send(mensaje);
        return;
    }

    usuario.nombre = value.nombre;
    res.send(usuario);

});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}...`);
})