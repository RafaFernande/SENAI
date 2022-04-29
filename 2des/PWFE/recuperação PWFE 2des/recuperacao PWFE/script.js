let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    add();
})
function add() {
    //pegando valores do select e dos inputs
    var select = document.getElementById("select");
    var option = select.options[select.selectedIndex].value;

    var texto = document.getElementById("menssagem").value;
    var link = document.getElementById("link").value;

    //criando tags html
    var body = document.querySelector("body");
    var divPai = document.createElement("div");
    var divL = document.createElement("div");
    var excluir = document.createElement("button")
    var div = document.createElement("div");
    var pT = document.createElement("p");
    var pL = document.createElement("p");
    var a = document.createElement("a");

    //atribuindo as tags a classes
    divPai.setAttribute("class", "divPai");
    div.setAttribute("class", "card");
    divL.setAttribute("class", "linha");
    a.setAttribute("href", link);
    
    //atribuindo texto para as tags
    excluir.innerHTML = "X"
    pT.innerHTML = texto;
    a.innerHTML = link;
    pL.innerHTML = "Link:";

    //selecionando as tags pais e filhas
    body.appendChild(divPai);
    divPai.appendChild(div);
    div.appendChild(divL);
    divL.appendChild(pT);
    divL.appendChild(excluir);
    div.appendChild(pL);
    div.appendChild(a);

    //limpar os campos após pressionar o botão enviar
    document.getElementById("menssagem").value = "";
    document.getElementById("link").value = "";
    document.getElementById("select").value = "default";

    //excluir card ao clicar no botão "X"
    excluir.addEventListener("click", () => {
        div.remove();
    })

    //if e else para mudar a cor do card gerado de acordo com a opção selecionada no select
    if (option == "normal") {
        div.style.backgroundColor = "#d6ffff";
    }else if(option == "importante"){
        div.style.backgroundColor = "#fcfce3";
    }else if(option == "urgente"){
        div.style.backgroundColor = "#ff6961";
    }
}