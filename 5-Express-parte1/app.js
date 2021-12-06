const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola Mundo dede Express.');
});

app.get('/api/usuarios', (req, res) => {
    res.send(['caro', 'maria', 'ana']);
});

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000..');
})