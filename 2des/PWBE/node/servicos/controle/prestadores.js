const { con } = require('./bdconnect.js')
const modelo = require('../modelo/prestador.js')

const doGet = (req, res) => {
    let string = `select * from prestador`
    con.query(string, (err, result) => {
        let array = [];
        total_geral = 0;
        result.forEach(e => {
            array.push(modelo.prestador(e))
            total_geral += modelo.prestador(e).subtotal;
        })
        jo = {
            "total_geral": total_geral.toFixed(2)
        }
        array.push(jo);
        res.json(array);
    })
}

const doGetId = (req, res) => {
    let string = `select * from prestador where id_servico = ${req.params.id_servico}`
    con.query(string, (err, result) => {
        if(result == ""){
            res.status(404).end();
        }else{
            res.json(modelo.prestador(result[0]));
        }
    })
}

const doPost = (req, res) => {
    let provedor = "\"" + req.body.provedor + "\"";
    let val_hora = "\"" + req.body.val_hora + "\"";
    let hr_trab = "\"" + req.body.hr_trab + "\"";
    let string = `insert into prestador(provedor, val_hora, hr_trab) values(${provedor}, ${val_hora}, ${hr_trab})`
    con.query(string, (err, result) => {
        if(result.affectedRows == 1){
            req.body.id_servico = result.insertId;
            res.json(modelo.prestador(req.body));

        }else{
            res.status(400).end();
        }
    })
}

const doPut = (req, res) => {
    
    let id_servico = req.body.id_servico;
    let provedor = "\"" + req.body.provedor + "\"";
    let val_hora = "\"" + req.body.val_hora + "\"";
    let hr_trab = "\"" + req.body.hr_trab + "\"";
    let string = `update prestador set provedor = ${provedor}, val_hora = ${val_hora}, hr_trab = ${hr_trab} where id_servico = ${id_servico}`
    con.query(string, (err, result) => {
        if(result.changeRows == 1){
            res.json(req.body)
            res.status(200).end();
        }else{
            res.status(404).end()
        }
    })
}

const doDelete = (req, res) => {
    let string = `delete from prestador where id_servico = ${req.params.id_servico}`
    con.query(string, (err, result) => {
        if(result.affectedRows == 1) {
            res.status(200).end();
        }else{
            res.status(404).end();
        }
    })
}

module.exports = {
    doGet,
    doPost,
    doPut,
    doDelete,
    doGetId
}