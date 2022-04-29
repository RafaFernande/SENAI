var body = document.querySelector("body");

function loadData(e) {
    let file = e.files[0];

    let fr = new FileReader();//S2

    fr.onload = () => {
        let data = JSON.parse(fr.result);

        generateHTML(data);
    }

    fr.readAsText(file);
}

function generateHTML(data) {
    for(i = 0; i< data.length;) {
    let nome = document.createElement("h2");
    nome.innerHTML = data[i].nome;

    let genero = document.createElement("h4");
    genero.innerHTML = data[i].autor;

    let ano = document.createElement("h4");
    ano.innerHTML = data[i].ano;

    let foto = document.createElement("img");
    foto.src = data[i].foto;
    foto.alt = "Link do arquivo não encontrado"

    body.appendChild(nome);
    body.appendChild(genero);
    body.appendChild(ano);
    body.appendChild(foto);
    i++
    }
    
}