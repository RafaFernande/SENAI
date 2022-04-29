let url = "http://10.87.207.2:8080/api/livro";

var id = document.querySelector("#id");
var titulo = document.querySelector("#titulo");
var autor = document.querySelector("#autor");
var editora = document.querySelector("#editora");
var idioma = document.querySelector("#idioma");
var urlImagem = document.querySelector("#urlImagem");
var lacamento = document.querySelector("#lancamento");
var numeroPaginas = document.querySelector("#numeroPaginas");
var estoque = document.querySelector("#estoque");
var preco = document.querySelector("#preco");

    fetch(url, {
        method: "POST",
        body: JSON.stringify(obj)
    })
    .then(res => {return res.json() })
    .then(data => {
        console.log(data);
    })
    .catch(err => {console.log(err) })
    
    function funcao(){
        let data = new Date(element.lancamento);
        let dataFormatada = data.getDay().toString() + "/" + data.getMonth().toString() + "/" + data.getFullYear().toString()
    }