var item = document.querySelector("#campo");

function lista(l) {
    let card = document.createElement("div")
    let pnome = document.createElement("p")

    card.className = "card"
    pnome.innerHTML = nome.value

    dados.appendChild(pnome)

    botao.innerHTML = "<img width='50px' src='./assets/trash.png'>"
    botao.addEventListener("click", () => {
        salvar.appendChild(card)
    });
}
