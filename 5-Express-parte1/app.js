const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola Mundo dede Express.');
});

app.get('/api/usuarios', (req, res) => {
    res.send(['caro', 'maria', 'ana'])
});

app.get('/api/usuarios/:years/:mes', (req, res)=>{
    res.send(req.query);
});

const port = process.env.PORT ||3000;
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}...`);
})