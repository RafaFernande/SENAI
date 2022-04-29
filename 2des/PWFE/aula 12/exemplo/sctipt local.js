//guarade uma informação
localStorage.setItem("name", "fulano da silva");

let nome = localStorage.getItem("name");

let data  = {
    id: 53,
    nome: "Beltrano Perdido"
};

// console.log(JSON.stringify(data));

// console.log(JSON.parse('{"nome":"nome do cidadao", idade:18}'));

localStorage.setItem("info", JSON.stringify(data));

let dataUser = JSON.parse(localStorage.getItem("info"))
// console.log(dataUser.id);

localStorage.clear();

localStorage.removeItem("info");

console.log(localStorage.getItem("teste"));

if(localStorage.getItem("data") === null){
    //não autorizado
}