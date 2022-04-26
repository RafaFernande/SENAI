let btn = document.getElementById("entregar");

btn.addEventListener("click", () => {
    add();
})

function add() {
    var selectC = document.getElementById("cesta");
    var selectF = document.getElementById("funcionario");

    var textoC = selectC.options[selectC.selectedIndex].text;
    var textoF = selectF.options[selectF.selectedIndex].text;

    var body = document.querySelector("body")
    var div = document.createElement("div");
    var divL = document.createElement("div");
    var pC = document.createElement("p")
    var pF = document.createElement("p")
    var pD = document.createElement("p")
    var pH = document.createElement("p")

    div.setAttribute("class", "final");
    divL.setAttribute("class", "linha1");

    //variaveis para pegar a data atual do sistema
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var dataAtual = dia + '/' + mes + '/' + ano;

    //variaveis para pegar a hora atual do sistema
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    var horaAtual = hora + ':' + min + ':' + seg;

    //atibuindo um texto para as variáveis
    pC.innerHTML = "Tipo: " + textoC;
    pF.innerHTML = "Funcionario: " + textoF;
    pD.innerHTML = "data: " + dataAtual;
    pH.innerHTML = "hora: " + horaAtual;

    //Definindo tags pais e flhas
    div.appendChild(divL)
    divL.appendChild(pC);
    divL.appendChild(pD)
    divL.appendChild(pH);
    div.appendChild(pF);
    body.appendChild(div);
}