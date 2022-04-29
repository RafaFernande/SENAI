const prestador = (dados) => {
    json = {
        "id_servico" : dados.id_servico,
        "provedor" : dados.provedor,
        "val_hora" : dados.val_hora,
        "hr_trab" : dados.hr_trab,
        "subtotal" : dados.val_hora * dados.hr_trab,
    }
    json.iss = (json.subtotal * 2 / 100).toFixed(2) * 1
    return json
}

module.exports = {
    prestador
}