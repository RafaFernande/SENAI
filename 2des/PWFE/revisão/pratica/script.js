let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    adicionarNaLista();
});

function adicionarNaLista() {
    //criando as tag
    let div = document.createElement("div");
    let texto = document.createElement("p");
    let botao_importante = document.createElement("button");
    let botao_excluir = document.createElement("button");
    let body = document.querySelector("body");

    //atribui a tag a uma classe
    div.setAttribute("class", "card");

    let input = document.getElementById("input").value;//pega o texto inserido no input


    //adiciona um evento ao botão
    botao_importante.addEventListener("click", () => {
        //if e else que ao botão ser pressionado muda a cor da div, e o texto do botão
        if (div.style.backgroundColor == "lightcoral") {
            div.style.backgroundColor = "white";
            botao_importante.innerHTML = "Importante";
        } else {
            div.style.backgroundColor = "lightcoral";
            botao_importante.innerHTML = "Desmarcar";
        }
    });

    botao_excluir.addEventListener("click", () => {
        div.remove();
    });

    texto.innerHTML = input;//coloca o texto do input na tag "p"

    //escolhendo o texto para os botões
    botao_importante.innerHTML = "Importante";
    botao_excluir.innerHTML = "Excluir"

    //define as tags filhas:   tagPai.appendChild(tagFilha);
    div.appendChild(texto);
    div.appendChild(botao_importante);
    div.appendChild(botao_excluir);
    body.appendChild(div);

}