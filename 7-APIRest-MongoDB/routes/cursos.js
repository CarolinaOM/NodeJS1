const express = require('express');
const ruta = express.Router();

ruta.get('/', (req, res) => {
    res.json('Listo el GER de cursos.');
});

module.exports = ruta;