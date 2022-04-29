const express = require('express');
const rotas = express.Router();

const controle = require('../controle/prestadores.js');

rotas.get('/api', controle.doGet);
rotas.get('/api/:id_servico', controle.doGetId);
rotas.post('/api/post', controle.doPost);
rotas.put('/api/put', controle.doPut);
rotas.delete('/api/delete/:id_servico', controle.doDelete);

module.exports = rotas;